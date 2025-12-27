<?php
namespace ExampleFree\API;

use ExampleFree\Utils\SettingsHelper;

class RestAPI
{
    public static function register()
    {
        add_action('rest_api_init', [self::class, 'registerRoutes']);
    }

    public static function registerRoutes()
    {
        // Get settings for a specific page
        register_rest_route('example/v1', '/settings/(?P<page>[a-zA-Z0-9_-]+)', [
            'methods' => 'GET',
            'callback' => [self::class, 'getSettings'],
            'permission_callback' => [self::class, 'checkPermission'],
        ]);

        // Save settings for a specific page
        register_rest_route('example/v1', '/settings/(?P<page>[a-zA-Z0-9_-]+)', [
            'methods' => 'POST',
            'callback' => [self::class, 'saveSettings'],
            'permission_callback' => [self::class, 'checkPermission'],
            'args' => [
                'settings' => [
                    'required' => true,
                    'type' => 'object',
                ],
            ],
        ]);

        // Get all settings
        register_rest_route('example/v1', '/settings', [
            'methods' => 'GET',
            'callback' => [self::class, 'getAllSettings'],
            'permission_callback' => [self::class, 'checkPermission'],
        ]);
    }

    /**
     * Check if user has permission
     */
    public static function checkPermission()
    {
        return current_user_can('manage_options');
    }

    /**
     * Get settings for a specific page
     */
    public static function getSettings($request)
    {
        $page = sanitize_text_field($request['page']);
        $settings = SettingsHelper::getPageSettings($page);

        return rest_ensure_response([
            'success' => true,
            'page' => $page,
            'settings' => $settings,
        ]);
    }

    /**
     * Save settings for a specific page
     */
    public static function saveSettings($request)
    {
        $page = sanitize_text_field($request['page']);
        $settings = $request->get_param('settings');

        // Sanitize settings based on your needs
        $sanitized_settings = self::sanitizeSettings($settings);

        $success = SettingsHelper::savePageSettings($page, $sanitized_settings);

        return rest_ensure_response([
            'success' => $success,
            'page' => $page,
            'settings' => $sanitized_settings,
            'message' => $success ? 'Settings saved successfully' : 'Failed to save settings',
        ]);
    }

    /**
     * Get all settings
     */
    public static function getAllSettings($request)
    {
        $all_settings = SettingsHelper::getAllSettings();

        return rest_ensure_response([
            'success' => true,
            'settings' => $all_settings,
        ]);
    }

    /**
     * Sanitize settings array
     */
    private static function sanitizeSettings($settings)
    {
        if (!is_array($settings)) {
            return [];
        }

        $sanitized = [];
        foreach ($settings as $key => $value) {
            $key = sanitize_key($key);
            
            if (is_array($value)) {
                $sanitized[$key] = self::sanitizeSettings($value);
            } elseif (is_bool($value)) {
                $sanitized[$key] = (bool) $value;
            } elseif (is_numeric($value)) {
                $sanitized[$key] = $value;
            } else {
                $sanitized[$key] = sanitize_text_field($value);
            }
        }

        return $sanitized;
    }
}