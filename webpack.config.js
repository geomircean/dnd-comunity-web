
module.exports = {
  entry: ['./server/global.js', './src/index.js'],
  output: {
    filename: "bundle.js"
  },
  watch: true,
  module: {
    //preLoaders: [
    //  {
    //    test: /\.js$/,
    //    exclude: /node_modules/,
    //    loader: 'jshint-loader'
    //
    //  }
    //],
    loaders: [
      {
        test: [/\.es6$/, /\.js$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
};