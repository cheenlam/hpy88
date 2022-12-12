import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {dispatchEventStorage} from './utils/tool.js'


createApp(App)
.use(router)
.use(dispatchEventStorage)
.mount('#app')

// 跳轉至頂
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});
