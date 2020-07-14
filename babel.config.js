module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], //For transpile for machine node version
    '@babel/preset-typescript', //For transpile typescript to javascript
  ],
  plugins: [
    [
      'module-resolver', //For resolve alias"
      {
        alias: {
          '@modules': './src/modules',
          '@config': './src/config',
          '@shared': './src/shared',
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata', //For use decorators"
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
