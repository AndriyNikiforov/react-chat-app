const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss('./tailwind.config.js'),
    process.env.NODE_ENV === 'production' ? autoprefixer : null,
    process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null,
    purgecss({
      content: ['./layouts/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
