const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');


mix.webpackConfig(webpack => { 
  return {
      plugins: [
          new webpack.DefinePlugin({
              // '__VUE_OPTIONS_API__': 'true',
              '__VUE_PROD_DEVTOOLS__': 'false'
          })
      ]
  }
});

mix
  .js('resources/js/admin/main.js', 'public/js/admin.js')
  .vue()
  .extract()
  .sass('resources/sass/admin/app.scss', 'public/css/admin.css', {}, [
    tailwindcss('./tailwind.config.js')
  ])
  .options({
    processCssUrls: false,
  })
  .copy('resources/img', 'public/img')
  .disableNotifications();
