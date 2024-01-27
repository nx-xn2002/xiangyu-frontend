import User from "../pages/User.vue";
import Home from "../pages/Home.vue";
import Team from "../pages/Team.vue";
import Search from "../pages/Search.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/team', component: Team},
    {path: '/user', component: User},
    {path: '/search', component: Search},
]
export default routes;