const path = require('path');

const {
  VueLoaderPlugin
} = require('vue-loader');

const rules = [
  {
    test: /\.scss$/,
    use: ['vue-style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.sass$/,
    use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
  },
  {
    test: /\.less$/,
    use: ['vue-style-loader', 'css-loader', 'less-loader']
  },
  {
    test: /\.css$/,
    use: ['vue-style-loader', 'css-loader']
  },
  {
    test: /\.styl$/,
    use: ['vue-style-loader', 'css-loader', 'stylus-loader'],
  },
  {
    test: /\.html$/,
    use: 'vue-html-loader'
  },
  {
    test: /\.vue$/,
    use: 'vue-loader'
  },
  {
    test: /\.(png|jpe?g|gif)(\?.*)?$/,
    use: {
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'imgs/[name]--[folder].[ext]',
        esModule: false,
      }
    }
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'media/[name]--[folder].[ext]'
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: {
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'fonts/[name]--[folder].[ext]'
      }
    }
  },
];

const rendererConfig = {
  module: {
    rules
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    libraryTarget: 'commonjs2',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
      vue$: path.join(__dirname, './node_modules/vue/dist/vue.esm.js'),
    },
    extensions: ['.js', '.vue', '.json', '.css', '.styl'],
  },
};

module.exports = rendererConfig;