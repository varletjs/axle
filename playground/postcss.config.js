module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 6,
      unitToConvert: 'px',
      propList: ['*'],
      // pvi is postcss px to viewport ignore
      selectorBlackList: ['.pvi']
    }
  }
}
