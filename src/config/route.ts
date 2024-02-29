import UserPage from "../pages/UserPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import HomePage from "../pages/HomePage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/team', component: TeamPage},
    {path: '/search', component: SearchPage},
    {path: '/user', component: UserPage},
    {path: '/user/edit', component: UserEditPage},
    {path: '/user/list', component: SearchResultPage},
    {path: '/user/login', component: UserLoginPage},
]
export default routes;