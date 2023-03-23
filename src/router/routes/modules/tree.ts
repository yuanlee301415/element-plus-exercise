import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const TREE_ROUTE: AppRouteRecordRaw = {
  path: "/tree",
  name: "Tree",
  redirect: "/tree",
  component: LAYOUT,
  meta: {
    title: "Tree",
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: "",
      name: "TreePage",
      component: () => import("@/views/tree.vue"),
      meta: {
        title: "Tree"
      }
    }
  ]
};

export default TREE_ROUTE;