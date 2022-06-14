// router.js
import { createRouter } from 'vue-router'
import {ProjectCreatePage,ProjectListPage,TaskCreatePage,TasksListPage,TaskEditPage,ProjectEditPage} from './components/pages';

const routes = [
    { path: '/', component: ProjectListPage },
    { path: '/project/create', component: ProjectCreatePage },
    { path: '/project/:id', component: TasksListPage },
    { path: '/project/:id/create', component: TaskCreatePage },
    { path: '/project/:id/edit', component: ProjectEditPage },
    { path: '/project/:id/:idTask/edit', component: TaskEditPage }
]

export default function(history) {
  return createRouter({
    history,
    routes
  })
}