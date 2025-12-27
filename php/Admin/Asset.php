<?php
namespace ExampleFree\Admin;

class Asset
{
    public static function register()
    {
        add_action('admin_enqueue_scripts', [self::class, 'enqueueFreeAssets'], 20);
    }

    public static function enqueueFreeAssets($hook)
    {
        // Only load on Free's admin page
        if (empty($_GET['page']) || $_GET['page'] !== 'example') {
            return;
        }

        // Use EXAMPLE_FREE_FILE constant (plugin main file path)
        wp_enqueue_script(
            'example-admin-free',
            plugins_url('assets/admin/build/free.js', EXAMPLE_FREE_FILE),
            ['wp-element'],
            EXAMPLE_FREE_VERSION,
            true
        );

        wp_localize_script('example-admin-free', 'ExampleConfig', [
            'mode' => 'free',
            'nonce' => wp_create_nonce('wp_rest'),
            'rest' => rest_url(),
        ]);
    }
}