import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Me from './pages/Me.vue'
// 每个路由都需要映射到一个组件
const routes = [{
  path: '/',
  component: Home
}, {
  path: '/about',
  component: About
}, {
  path: '/me',
  component: Me
}]

export default routes