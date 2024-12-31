import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import { baseRoutes } from './routes/index'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRoutes as unknown as RouteRecordRaw[],
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}