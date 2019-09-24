const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('html-webpack-template');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PATHS = {
  root: __dirname,
  source: path.join(__dirname, './src'),
  build: path.join(__dirname, './build'),
  node_modules: path.join(__dirname, './node_modules'),
};

// NODE_ENV = env passed via npm script
const env = process.env.NODE_ENV;

console.info('process.env.NODE_ENV:', env);

// initial (common) array of webpack plugins
let plugins = [
  new HtmlWebpackPlugin({
    inject: false,
    template,
    appMountId: 'root',
    bodyHtmlSnippet: null, // '<a href="#main" class="sr-only sr-only-focusable">Skip to main content</a>',
    title: null,
    filename: 'index.html',
    links: [
      {
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        rel: 'stylesheet',
      },
    ],
    scripts: [],
    meta: [],
  }),
];

// add plugins to array per environment
switch (env) {
  case 'production': {
    plugins = plugins.concat([
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
      }),
    ]);
    break;
  }
  case 'development': {
    plugins = plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    ]);
    break;
  }
  default:
    break;
}

module.exports = {
  mode: env === 'production' ? 'production' : 'development',
  entry: {
    app: `${PATHS.source}/index.js`,
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    clientLogLevel: 'error',
    compress: true,
    port: 4000,
    allowedHosts: ['localhost'],
    hot: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      /* {
        test: /\.(js|jsx)$/,
        exclude: PATHS.node_modules,
        use: { loader: "eslint-loader" },
        enforce: "pre"
      }, */
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [PATHS.node_modules],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=src/img/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {},
  },
  plugins,
};
