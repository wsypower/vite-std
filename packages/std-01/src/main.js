/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-05-22 21:18:16
 * @LastEditTime: 2023-05-22 21:43:30
 * @LastEditors: wsy
 */
import { createApp } from 'vue'
import './style.css'
import { msg } from 'virtual:my-module'
import App from './App.vue'

console.log(msg)

createApp(App).mount('#app')
