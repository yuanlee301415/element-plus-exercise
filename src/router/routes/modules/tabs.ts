import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const TABS_ROUTE: AppRouteRecordRaw = {
  path: "/tabs",
  name: "Tabs",
  redirect: "/tabs/basic",
  component: LAYOUT,
  meta: {
    title: "Tabs标签页",
    hiddenChildrenInMenu: false
  },
  children: [
    {
      path: "basic",
      name: "BasicPage",
      component: () => import("@/views/tabs/basic.vue"),
      meta: {
        title: "基础"
      }
    }
  ]
};

export default TABS_ROUTE;