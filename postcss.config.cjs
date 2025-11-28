// PostCSS configuration for VeloceCSS
// This file configures Autoprefixer for cross-browser support
// and cssnano for production minification.

module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('cssnano')({
      preset: 'default'
    })
  ]
};