let mix = require('laravel-mix');

mix.sass('src/scss/client.scss', 'dist')
   .js('src/js/client.js' , 'dist').vue();