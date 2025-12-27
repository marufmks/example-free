<?php
namespace ExampleFree\Core;
use ExampleFree\Admin\Menu;
use ExampleFree\Admin\Asset;
class Bootstrap
{
    public static function init()
    {
        // Initialize the plugin
        Menu::register();
        Asset::register();
    }
}