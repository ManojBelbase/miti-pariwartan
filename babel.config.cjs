module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '16',          // Target Node.js 16+ for npm package
          browsers: 'defaults' // or "> 0.25%, not dead"
        },
        modules: false,       // Keep ES modules (Rollup handles them)
        useBuiltIns: 'usage', // Polyfill only used features
        corejs: 3
      }
    ],
    '@babel/preset-typescript', // Support TS
    '@babel/preset-react'       // Optional: if your package uses JSX/React
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',  // Support class properties
    '@babel/plugin-proposal-object-rest-spread' // Support object spread/rest
  ]
};
