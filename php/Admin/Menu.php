<?php
namespace ExampleFree\Admin;

class Menu
{
    public static function register()
    {
        /**
         * Register admin menu (FREE always does this)
         */
        add_action('admin_menu', [self::class, 'addAdminMenu']);
    }

    /**
     * Add admin menu page
     */
    public static function addAdminMenu()
    {
        add_menu_page(
            'Example Plugin',
            'Example',
            'manage_options',
            'example',
            [self::class, 'renderRoot'],
            'dashicons-admin-generic',
            56
        );

    }

    /**
     * React root
     */
    public static function renderRoot()
    {
        echo '<div id="example-admin-root"></div>';
    }
}