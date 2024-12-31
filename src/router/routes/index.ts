import { RouteRecordRaw } from "vue-router";
import calendarRoutes from "./modules/calendar";
const RootRoute:RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: () => import('@/views/calendar/index.vue'),
}


export const baseRoutes:RouteRecordRaw[] = [
  RootRoute,
  calendarRoutes
];