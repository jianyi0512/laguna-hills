module.exports = {
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        })
        return config
    },
  }

//   module.exports = {
//     images: {
//       domains: ['localhost']
//     }
//   }