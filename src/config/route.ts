import UserPage from "../pages/UserPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import HomePage from "../pages/HomePage.vue";
import UserEditPage from "../pages/UserEditPage.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/team', component: TeamPage},
    {path: '/search', component: SearchPage},
    {path: '/user', component: UserPage},
    {path: '/user/edit', component: UserEditPage},
]
export default routes;