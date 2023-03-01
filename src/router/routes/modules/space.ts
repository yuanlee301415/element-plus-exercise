import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const SPACE_ROUTE: AppRouteRecordRaw = {
  path: "/space",
  name: "Space",
  redirect: "/space",
  component: LAYOUT,
  meta: {
    title: "间距",
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: "",
      name: "SpacePage",
      component: () => import("@/views/space.vue"),
      meta: {
        title: "间距"
      }
    }
  ]
};

export default SPACE_ROUTE;