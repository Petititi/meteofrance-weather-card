

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/meteofrance-weather-card.ts',
  output: {
    file: 'dist/meteofrance-weather-card.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    terser(),
  ],
};

