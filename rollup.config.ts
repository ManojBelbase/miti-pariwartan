import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
      plugins: isProduction ? [terser()] : []
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm',
      sourcemap: true,
      plugins: isProduction ? [terser()] : []
    }
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    isProduction && terser()
  ].filter(Boolean),
  external: ['react', 'react-dom']
};