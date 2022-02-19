module.exports = {
    resolve:{
        fallback: { 
         "http": require.resolve("stream-http"),
         "https": require.resolve("https-browserify"),
         "querystring": require.resolve("querystring-es3"),
         "buffer": require.resolve("buffer/"),
      }
     },

     plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser'
        })
     ]
}
    