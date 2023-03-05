const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "Home",
      },
      {
        path: "/completedTasks",
        component: () => import("pages/completedTasks.vue"),
        name: "Completed Task List",
      },
      {
        path: "/in-completedTasks",
        component: () => import("pages/incompletedTasks.vue"),
        name: "In Completed task List",
      },
      {
        path: "/deletedTasks",
        component: () => import("pages/deletedTasks.vue"),
        name: "Deleted Tasks",
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
