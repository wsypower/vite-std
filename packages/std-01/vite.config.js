/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-05-22 21:18:16
 * @LastEditTime: 2023-05-22 21:33:55
 * @LastEditors: wsy
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import { virtualModule } from 'plugins'

export default defineConfig({
  plugins: [
    Inspect(),
    vue(),
    virtualModule(),
  ],
})
