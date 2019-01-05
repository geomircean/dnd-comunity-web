
module.exports = {
  entry: ['./server/global.js', './src/index.js'],
  output: {
    filename: "bundle.js"
  },
  mode: 'development',
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
    rules: [
      {
        test: [/\.es6$/, /\.js$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        type: 'javascript/auto',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        //type: 'css//auto',
        use: ['css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
};