/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-05-22 21:18:16
 * @LastEditTime: 2023-05-22 22:27:04
 * @LastEditors: wsy
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import { hooks } from 'plugins'

export default defineConfig({
  base: '/',
  plugins: [
    Inspect(),
    vue(),
    hooks(),
  ],
})
