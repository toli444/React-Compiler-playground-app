import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

const ReactCompilerConfig = {};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // disabling minification, so we can examine the dist folder and see the output of the React Compiler
    minify: false,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ]
      }
    })
  ],
})
