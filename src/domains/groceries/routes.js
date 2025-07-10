import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";
import Overview from "./pages/Overview.vue";

export const routes = [
    { path: '/create', name: 'groceries.create', component: Create },
    { path: '/edit', name: 'groceries.edit', component: Edit },
    { path: '/', name: 'groceries.overview', component: Overview }
];
