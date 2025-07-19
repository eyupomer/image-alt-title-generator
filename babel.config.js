module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    ['image-alt-title-generator/babel', {
      parserOptions: {
        prefix: 'Photo of',
        suffix: 'image',
        removeNumbers: true,
        customMappings: {
          'logo': 'Company Logo',
          'avatar': 'User Avatar Image'
        }
      },
      generateTitle: true,
      generateAlt: true,
      fallbackAlt: 'Image',
      fallbackTitle: 'Image'
    }]
  ]
}; 