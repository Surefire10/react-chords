import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import packageJson from "./package.json";

const config = {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: false,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
};

export default config;
