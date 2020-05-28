module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'file-loader',
      options: {
        name: '[name]_[hash].[ext]',
        publicPath: `/_next/static/files`,
        outputPath: 'static/files'
      }
    })

    return config
  },
}