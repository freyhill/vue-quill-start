const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = {
  entry: './src/index.ts',
  module: {
    rules: [
      
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
        ],
     },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx','.jsx', '.js', '.vue', '.json' ]
  },
   devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 3001,
    open: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({template:'./index.html'}),
    new VueLoaderPlugin()
  ]
};

module.exports = (env, argv) => {
  return config;
}