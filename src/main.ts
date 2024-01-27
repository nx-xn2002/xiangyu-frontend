import {createApp} from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import 'vant/es/toast/style';
import * as VueRouter from 'vue-router'
import {Button, Icon, NavBar, Tabbar, TabbarItem, Toast} from 'vant';
import routes from './config/route.ts'

const app = createApp(App)
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(Icon);
app.use(TabbarItem);
app.use(Toast);

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

app.use(router)
app.mount('#app');