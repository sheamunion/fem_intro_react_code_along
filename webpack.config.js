const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/', // tell Webpack where the static directory is.
    historyApiFallback: true // Reroute 404s to the home page
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre', // Before build process, run this loader. Lint the input, not the output of the build process.
        test: /\.js$/, // JS files.
        loader: 'eslint-loader', // Use this loader.
        exclude: /node_modules/ // exclude all node modules. I only want my code linted.
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/, // CSS files.
        use: [
          'style-loader',
          {
            loader: 'css-loader', // Use the CSS loader.
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}
