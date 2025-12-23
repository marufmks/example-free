<?php
/**
 * Plugin Name: Example Free
 * Description: Free version of Example Plugin.
 * Version: 1.0.0
 */

if (!defined('ABSPATH'))
    exit;

define('EXAMPLE_ADMIN_PAGE', 'example-app');
define('EXAMPLE_FREE_VERSION', '1.0.0');

/**
 * Register admin menu (FREE always does this)
 */
add_action('admin_menu', function () {
    add_menu_page(
        'Example Plugin',
        'Example',
        'manage_options',
        EXAMPLE_ADMIN_PAGE,
        'example_render_root',
        'dashicons-admin-generic',
        56
    );
});

/**
 * React root
 */
function example_render_root()
{
    echo '<div id="example-admin-root"></div>';
}

/**
 * Enqueue FREE build
 */
add_action('admin_enqueue_scripts', function () {

    if (empty($_GET['page']) || $_GET['page'] !== EXAMPLE_ADMIN_PAGE) {
        return;
    }

    wp_enqueue_script(
        'example-admin-free',
        plugins_url('admin/build/free.js', __FILE__),
        ['wp-element'],
        EXAMPLE_FREE_VERSION,
        true
    );


    wp_localize_script('example-admin-free', 'ExampleConfig', [
        'mode' => 'free',
        'nonce' => wp_create_nonce('wp_rest'),
        'rest' => rest_url(),
    ]);
});
