<?php
namespace ExampleFree\Utils;

class SettingsHelper
{
    /**
     * Option key where all settings are stored
     */
    const OPTION_KEY = 'example_plugin_settings';

    /**
     * Get all settings
     */
    public static function getAllSettings()
    {
        $settings = get_option(self::OPTION_KEY, []);
        return is_array($settings) ? $settings : [];
    }

    /**
     * Get settings for a specific page
     * 
     * @param string $page_name Page identifier (e.g., 'general', 'advanced', 'pro_features')
     * @return array
     */
    public static function getPageSettings($page_name)
    {
        $all_settings = self::getAllSettings();
        return isset($all_settings[$page_name]) && is_array($all_settings[$page_name]) 
            ? $all_settings[$page_name] 
            : [];
    }

    /**
     * Save settings for a specific page
     * 
     * @param string $page_name Page identifier
     * @param array $settings Settings to save
     * @return bool
     */
    public static function savePageSettings($page_name, $settings)
    {
        $all_settings = self::getAllSettings();
        $all_settings[$page_name] = $settings;
        
        return update_option(self::OPTION_KEY, $all_settings);
    }

    /**
     * Get a specific setting value
     * 
     * @param string $page_name Page identifier
     * @param string $key Setting key
     * @param mixed $default Default value if not found
     * @return mixed
     */
    public static function getSetting($page_name, $key, $default = null)
    {
        $page_settings = self::getPageSettings($page_name);
        return isset($page_settings[$key]) ? $page_settings[$key] : $default;
    }

    /**
     * Update a specific setting value
     * 
     * @param string $page_name Page identifier
     * @param string $key Setting key
     * @param mixed $value Value to save
     * @return bool
     */
    public static function updateSetting($page_name, $key, $value)
    {
        $page_settings = self::getPageSettings($page_name);
        $page_settings[$key] = $value;
        
        return self::savePageSettings($page_name, $page_settings);
    }

    /**
     * Delete settings for a specific page
     * 
     * @param string $page_name Page identifier
     * @return bool
     */
    public static function deletePageSettings($page_name)
    {
        $all_settings = self::getAllSettings();
        
        if (isset($all_settings[$page_name])) {
            unset($all_settings[$page_name]);
            return update_option(self::OPTION_KEY, $all_settings);
        }
        
        return true;
    }

    /**
     * Delete all settings
     * 
     * @return bool
     */
    public static function deleteAllSettings()
    {
        return delete_option(self::OPTION_KEY);
    }
}