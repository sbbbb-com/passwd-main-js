import {httpStatus, httpUtils} from "@/api";

loadStyle('https://unpkg.com/ant-design-vue@3.0.0-alpha.14/dist/antd.css')

import App from './app.vue'
import { isDev } from './config'
import { loadStyle } from './utils'
import Antd from '@/utils/antd'
import './styles/global.scss'
import {setStore} from "@/utils/storage";


const id = `app_vue_${Date.now()}`
const root = document.createElement('div')
root.id = id
document.body.appendChild(root)
if (isDev) {
  const Vue = require('vue')
  const app = Vue.createApp(App)
  // const Antd = require('ant-design-vue');
  // app.use(Antd)
  app.use(Antd)
  app.mount(`#${id}`)
} else {
  const app = Vue.createApp(App)
  // const Antd = require('ant-design-vue');
  // app.use(Antd)
  app.use(Antd)
  app.mount(`#${id}`)
}

 /* 与本地服务器接口通信 */

// 1. 测试网络通路
httpStatus().then(({data})=>{
  console.log("测试网络通路数据=>",data)
  if (data===2023){
    // alert("自定义密码插件与本地服务通信正常")
    console.log("自定义密码插件与本地服务通信正常")
  }else {
    alert("自定义密码插件与本地服务通信失败")
  }
}).catch(err=>{
  alert("自定义密码插件与本地服务通信失败"+err)
})

// 2. 鉴权 访问本地

// setStore("kk","测试数据")


// 3. 与本地通信


