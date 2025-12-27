<?php
namespace ExampleFree\Core;
use ExampleFree\Admin\Menu;
use ExampleFree\Admin\Asset;
use ExampleFree\API\RestAPI;
class Bootstrap
{
    public static function init()
    {
        // Initialize the plugin
        Menu::register();
        Asset::register();
        RestAPI::register();
    }
}