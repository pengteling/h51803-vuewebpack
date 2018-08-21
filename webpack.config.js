const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const isDev = process.env.NODE_ENV === 'development'
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
console.log(isDev)
const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filenmae: 'index.html'
    })
  ]
}

if (isDev) {
  //开发者模式
  config.devServer = {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    inline: true
    //open:true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]

    }
  )
}
else {
  //生产模式
  config.entry = {
    app: path.resolve(__dirname,'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name]-[chunkhash:8].js'
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextWebpackPlugin('style-[contentHash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  )

  config.module.rules.push(
    {
      test: /\.scss$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      })

    }
  )

}

module.exports = config