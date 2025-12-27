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
define('EXAMPLE_FREE_PATH', plugin_dir_path(__FILE__));
define('EXAMPLE_FREE_URL', plugin_dir_url(__FILE__));
define('EXAMPLE_FREE_FILE', __FILE__);

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
    require_once __DIR__ . '/vendor/autoload.php';
}

ExampleFree\Core\Bootstrap::init();

