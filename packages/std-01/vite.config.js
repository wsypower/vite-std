/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-05-22 21:18:16
 * @LastEditTime: 2023-05-25 21:58:43
 * @LastEditors: wsy
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import { hooks } from 'plugins'

export default defineConfig((env) => {
  return {
    base: './',
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'],
            lodash: ['lodash-es'],
          },
        },
      },
    },
    plugins: [
      Inspect(),
      vue(),
      hooks(),
    ],
  }
})
