// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHashHistory } from 'vue-router'
import vant from 'vant'
import 'vant/lib/index.css'
import routes from './routes'
import './assets/css/index.scss'
import App from './App.vue'



// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.use(router)
// 引入 vant UI
app.use(vant)


app.mount('#app')

