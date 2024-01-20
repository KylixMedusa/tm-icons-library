import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: "src/index.tsx", // Replace with your main file
  output: [
    {
      file: "dist/bundle.cjs.js", // CommonJS output
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js", // ES Module output
      format: "esm",
    },
    {
      file: "dist/bundle.umd.js", // UMD output
      name: "tm-icons-library", // Replace with your library's global variable
      format: "umd",
    },
  ],
  external: [
    "react", // Exclude React from the bundle
    "react-dom", // Exclude ReactDOM from the bundle
  ],
  plugins: [
    babel({
      extensions: [".js", ".jsx"], // Add this line
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(), // Minify the output (optional)
  ],
};
