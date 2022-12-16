import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {dispatchEventStorage} from './utils/tool.js'

// 跳轉至頂
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	window.pageYOffset = 0;
});


createApp(App)
.use(router)
.use(dispatchEventStorage)
.mount('#app')


