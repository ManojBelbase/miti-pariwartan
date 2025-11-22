import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',

  output: [
    // CommonJS (for Node.js, require())
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    // ESM (for import, modern tools)
    {
      file: 'lib/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    // UMD (for CDN + <script> tag) ← THIS IS CRITICAL!
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'mitiPariwartan',        // ← Global variable name in browser
      sourcemap: true,
    },
  ],

  plugins: [
    resolve(),           // Resolve node_modules (not needed here, but safe)
    commonjs(),          // Convert CommonJS to ESM
    json(),              // Allow importing JSON (your date data!)
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'lib',
      outDir: 'lib',
    }),
    isProduction && terser(),  // Minify only in production
  ].filter(Boolean),

  // Remove React from external — your library doesn't depend on React!
  external: [],  // ← This was wrong before!
};