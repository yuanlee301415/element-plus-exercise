import type { AppRouteRecordRaw } from "@/router/types";

import { LAYOUT } from "@/router/constant";

const ICON_ROUTE: AppRouteRecordRaw = {
  path: "/icon",
  name: "Icon",
  redirect: "/icon",
  component: LAYOUT,
  meta: {
    title: "Icon",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "IconPage",
      component: () => import("@/views/Icon.vue"),
      meta: {},
    },
  ],
};

export default ICON_ROUTE;
