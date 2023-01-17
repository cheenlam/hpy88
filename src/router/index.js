import { createRouter, createWebHistory } from "vue-router";
import { apiGetMessageListData } from "@/api/api";
import MainView from "@/views/MainView.vue";
import Home from "@/views/Home.vue";
import Sports from "@/views/Sports.vue";
import Casino from "@/views/Casino.vue";
import Computer from "@/views/Computer.vue";
import Activity from "@/views/Activity.vue";
import InfoCentre from "@/views/InfoCentre.vue";
import Anns from "@/views/Anns.vue";
import MyWallet from "@/views/MyWallet.vue";
import MyLetter from "@/views/MyLetter.vue";
import TransHistory from "@/views/TransHistory.vue";
import BetHistory from "@/views/BetHistory.vue";


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
          title: "HPY88｜首页",
          menuIdx: 0
        },
      },
      {
        path: "Sports",
        name: "Sports",
        component: Sports,
        meta: {
          title: "HPY88｜体育博彩",
          menuIdx: 1
        },
      },
      {
        path: "Casino",
        name: "Casino",
        component: Casino,
        meta: {
          title: "HPY88｜真人娱乐",
          menuIdx: 2
        },
      },
      {
        path: "Computer",
        name: "Computer",
        component: Computer,
        meta: {
          title: "HPY88｜电子游戏",
          menuIdx: 3
        },
      },
      {
        path: "Activity",
        name: "Activity",
        component: Activity,
        meta: {
          title: "HPY88｜优惠活动",
          menuIdx: 4
        },
      },
      {
        path: "InfoCentre/:id",
        name: "InfoCentre",
        component: InfoCentre,
        meta: {
          title: "HPY88｜常见问题与条款",
          menuIdx: -1
        },
      },
      {
        path: "Anns/:id",
        name: "Anns",
        component: Anns,
        meta: {
          title: "HPY88｜公告",
          menuIdx: -1
        },
      },
      {
        path: "MyWallet",
        name: "MyWallet",
        component: MyWallet,
        meta: {
          title: "HPY88｜我的钱包",
          menuIdx: -1,
          auth:true 
        },
      },
      {
        path: "MyLetter",
        name: "MyLetter",
        component: MyLetter,
        meta: {
          title: "HPY88｜我的信件",
          menuIdx: -1,
          auth:true 
        },
      },
      {
        path: "TransHistory",
        name: "TransHistory",
        component: TransHistory,
        meta: {
          title: "HPY88｜交易纪录",
          menuIdx: -1,
          auth:true 
        },
      },
      {
        path: "BetHistory",
        name: "BetHistory",
        component: BetHistory,
        meta: {
          title: "HPY88｜投注纪录",
          menuIdx: -1,
          auth:true 
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
  window.scrollTo(0, 0);
  sessionStorage.setItem('menuIdx',to.meta.menuIdx);

  if(to.matched.some( m => m.meta.auth)){
    const token = sessionStorage.getItem('token');
    if(token == null || token == ''){
      // 未登入重新導向首頁
      next({path:'/'});
      sessionStorage.setItem('signSw','roterOff');
      return;
    }else{
      apiGetMessageListData(token).then((res) => { 
       if(res.code == 200){
        next();
        document.title = to.meta.title;
       }else{
        next({path:'/'});
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('mailNotRead');
        setTimeout(() => {
          location = location;
        }, 100);
       }
      }).catch((err) => {});
      return;
    }
  }

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
