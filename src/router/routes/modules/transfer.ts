import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const TRANSFER_ROUTE: AppRouteRecordRaw = {
  path: "/transfer",
  name: "Transfer",
  redirect: "/transfer",
  component: LAYOUT,
  meta: {
    title: "穿梭框",
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: "",
      name: "TransferPage",
      component: () => import("@/views/transfer.vue"),
      meta: {
        title: "穿梭框"
      }
    }
  ]
};

export default TRANSFER_ROUTE;