const path = require("path");
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const strip = require('strip-comments');
const EditableSourcesWebpackPlugin = require('editable-sources-webpack-plugin');
const DtsBundleWebpack = require('dts-bundle-webpack');

module.exports = function (env, argv) {
  return {
    entry: {
      CometChat_componenets: "./src/index.ts"
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
      libraryTarget: 'umd'
    },
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: [{ loader: "ts-loader" }],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: "css-loader", options: { modules: true }
            }
          ]
        }
      ]

    }, optimization: {
      minimize: true,
      minimizer: [
        new uglifyJsPlugin({
          uglifyOptions: {
            comments: false,
            extractComments: true,
            compress: {
              drop_console: true,
            }
          }
        })
      ]
    },
    plugins: [
      // export default the compiled module
      new EditableSourcesWebpackPlugin(
        /^CometChat\.js$/,
        sourceCode => strip(sourceCode, { keepProtected: false })
        // sourceCode => ("export const CometChat =" + sourceCode.slice('window["CometChat"] ='.length)),
      ),
      // new DtsBundleWebpack({
      //   name:'CometChat',
      //   main:'dist/src/lib/CometChat.d.ts',
      //   out:'../../../dist/CometChat.d.ts',
      //   outputAsModuleFolder: true
      // })
    ],
    resolve: {/*  */
      extensions: [".ts", ".js", ".css"]
    },
  }
};

