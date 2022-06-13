module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    },
    'cssnano': {},
  }
}
