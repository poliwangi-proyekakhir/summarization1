const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

.styles([
   		'/libs/blog-spot.css',
   		'/libs/bootstrap.css',
   		'/libs/font-awesome.css',
   		'/libs/metisMenu.css',
   		'/libs/sb-admin-2.css'
   	], './public/css/libs.css')

   .scripts([
   		'/libs/jquery.js',
   		'/libs/bootstrap.js',
   		'/libs/metisMenu.js',
   		'/libs/sb-admin-2.js'
   		'/libs/scripts.js'
   		], './public/js/libs.js');