import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import Home from "@/views/Home.vue";
import Sports from "@/views/Sports.vue";
import Casino from "@/views/Casino.vue";
import Computer from "@/views/Computer.vue";
import Activity from "@/views/Activity.vue";



const routes = [
  {
    path: "/",
    name: "MainView",
    component: MainView,
    redirect: "/Home",
    children: [
      {
        path: "Home",
        name: "Home",
        component: Home,
        meta: {
          title: "Home page title",
          menuIdx: 0
        },
      },
      {
        path: "Sports",
        name: "Sports",
        component: Sports,
        meta: {
          title: "Sports page title",
          menuIdx: 1
        },
      },
      {
        path: "Casino",
        name: "Casino",
        component: Casino,
        meta: {
          title: "Casino page title",
          menuIdx: 2
        },
      },
      {
        path: "Computer",
        name: "Computer",
        component: Computer,
        meta: {
          title: "Computer page title",
          menuIdx: 3
        },
      },
      {
        path: "Activity",
        name: "Activity",
        component: Activity,
        meta: {
          title: "Activity page title",
          menuIdx: 4
        },
      },
    ],
  },
  {
    path: "/404",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "@/views/NotFound.vue"),
    meta: {
      title: "404 Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  sessionStorage.setItem('menuIdx',to.meta.menuIdx);

  if (to.meta.title) {
    document.title = to.meta.title;
  }

  if (!to.matched.length) {
    next("/404");
  } else {
    next();
  }
});

export default router;
