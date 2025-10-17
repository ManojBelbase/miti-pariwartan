import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',   // or 'esm' if you prefer ES module output
    sourcemap: true
  },
  plugins: [
    json(),        // handles .json imports
    
    typescript({ jsx: "react-jsx" }), // handles TS + JSX
    terser()       // minifies output
  ]
};
