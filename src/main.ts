import {createApp} from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import 'vant/es/toast/style';
import * as VueRouter from 'vue-router'
import routes from './config/route.ts'
import Vant from 'vant'

const app = createApp(App)
app.use(Vant);

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

app.use(router)
app.mount('#app');