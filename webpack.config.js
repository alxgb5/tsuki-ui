/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

module.exports = [
  {
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist', 'cjs'),
      library: {
        type: 'commonjs2',
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
  },
  {
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist', 'esm'),
      library: {
        type: 'module',
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
    experiments: {
      outputModule: true,
    },
  },
]

