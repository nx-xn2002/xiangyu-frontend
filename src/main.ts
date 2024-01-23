import {createApp} from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import 'vant/es/toast/style';

import {Button, Icon, NavBar, Tabbar, TabbarItem, Toast} from 'vant';

const app = createApp(App)
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(Icon);
app.use(TabbarItem);
app.use(Toast);


app.mount('#app');

