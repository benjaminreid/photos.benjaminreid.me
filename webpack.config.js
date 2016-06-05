module.exports = {
  // sets path from which the entrypoint references
  context: `${__dirname}/app`,

  // the main file to start processing
  entry: './main.js',

  output: {
    // the directory in which the file should be ouput too
    path: __dirname,
    // the name of the file to ouput
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // a babel loader that will process ES6 and compile modules
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
