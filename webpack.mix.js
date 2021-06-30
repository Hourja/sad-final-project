const mix = require('laravel-mix')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// require('laravel-mix-artisan-serve')

mix
  .webpackConfig({
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.s?css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: false
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin({})]
  })
  .js('resources/js/index.jsx', 'public/js')
  .react()
  .browserSync({
        host: 'localhost',
        port: 3000,
        proxy: {
            target: process.env.APP_URL // Yay! Using APP_URL from the .env file!
        }
    })
  