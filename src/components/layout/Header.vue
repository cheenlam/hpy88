<template>
  <div class="header">
    <div class="inner" :class="{'login' : isLogin}">
      <div class="hd_left">
        <router-link to="/home" class="logo">
          <img src="@/assets/images/logo_row.webp" alt="logo" />
        </router-link>
        <div class="hd_menu">
          <ul>
            <li
              v-for="(item, index) in topMenu"
              :key="index"
              :class="{ on: menuIdx == index }"
            >
              <router-link :to="item.link"
                ><span>{{ item.menuTitle }}</span></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="hd_right" v-if="!isLogin">
        <ul>
          <li @click="openSign(0)">登入</li>
          <li @click="openSign(1)" class="regBtn">註冊</li>
        </ul>
      </div>

      <div class="hd_isLogin" v-if="isLogin">
        <div class="avatar">
          <img src="@/assets/images/icon/hd_avatar.png" alt="avatar">
        </div>
        <button @click="signOut()">登出</button>
      </div>
    </div>
  </div>

  <SignLog v-if="signSw" @closeSign="closeSign" @signIn="signIn" :signNum="signNum"></SignLog>
</template>

<script setup>
import { getTopMenu } from "@/api/api";
import { onMounted, ref,nextTick } from "vue";
import SignLog from "@/components/tool/SignLog.vue";
import { getToken } from "@/utils/cookies";

const isLogin = ref(false)
const topMenu = ref([]);
const menuIdx = ref(0);

const getMenu = () => {
  getTopMenu().then(function (response) {
    topMenu.value = response;
  });
};
// 修改menu狀態
const chgMenuIdx = () => {
  menuIdx.value = sessionStorage.getItem('menuIdx');
}

// 登入註冊彈窗
const signSw = ref(false);
const signNum = ref(0);
// 開啟登入註冊彈窗
const openSign = (val) => {
  signSw.value = true;
  signNum.value = val;
}
// 關閉登入註冊彈窗
const closeSign = () => {
  signSw.value = false;
}

// 確認登入狀態
const ckLogin = () => {
  const token = sessionStorage.getItem('token');
  if(token == null || token == ''){
    isLogin.value = false;
  }else{
    isLogin.value = true;
  }
}
// 登入
const signIn = (data) => {
  isLogin.value = data;
}
// 登出
const signOut = () => {
  isLogin.value = false;
  sessionStorage.removeItem('token');
  location.href = '/'
}

const init = onMounted(() => {
  getMenu();
  chgMenuIdx();
  ckLogin();

  // 監聽
  window.addEventListener("setItemEvent", (e) => {
    if (e.key == "menuIdx") {
      nextTick(() => {
        chgMenuIdx();
      });
    }
  });
});
</script>

<style lang="scss" scoped>
@import "@/scss/method.scss";
@import "@/scss/shared.scss";
.header {
  width: 100%;
  position: sticky;
  @include pos(tl, 0);
  z-index: 10;
  font-size: 15px;
  background-color: #eef2fc;
  box-shadow: 0 2px 8px #a0a0a0;

  .inner {
    max-width: 1320px;
    height: 60px;
    margin: auto;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @at-root .hd_left {
    display: flex;
    align-items: center;
    .logo {
      width: 130px;
      margin-right: 30px;
      cursor: pointer;
    }
    .hd_menu {
      height: 60px;
      ul {
        height: 100%;
        display: flex;
        align-items: center;
      }
      li {
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        a {
          height: 100%;
          display: flex;
          align-items: center;
        }
        span {
          transition: color 0.5s;
          font-weight: bold;
        }
        @include hover {
          &:hover {
            .gameList {
              display: block;
              z-index: 10;
            }
            span {
              color: #1e50a6;
            }
          }
        }
        & + li {
          margin-left: 20px;
        }
        &.on {
          span {
            color: #1e50a6;
            position: relative;
          }
          &::before {
            content: "";
            width: 25px;
            height: 4px;
            border-radius: 4px;
            margin: auto;
            background-color: #1e50a6;
            position: absolute;
            @include pos(blr, 3px, 0, 0);
          }
        }
      }
    }
  }

  @at-root .hd_right {
    ul {
      display: flex;
      align-items: center;
    }
    li {
      padding: 5px 20px;
      cursor: pointer;
      border-radius: 5px;
      font-weight: bold;
      letter-spacing: 1px;
      & + li {
        margin-left: 5px;
      }
    }
    .regBtn {
      color: #fff;
      background-image: conic-gradient(from 1turn, #57d7ff, #1e50a6);
    }
  }

  @at-root .hd_isLogin{
    display: flex;
    align-items: center;
 
    .avatar{
      width: 35px;
      margin-right: 8px;
      cursor: pointer;
    }

    button{
      @include fullNone;
      height: 34px;
      padding: 5px 20px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #fff;
      background-image: conic-gradient(from 1turn, #57d7ff, #1e50a6);
    }
  }
}

@include rwd(750) {
  .hd_left {
    .hd_menu {
      display: none;
    }
  }
}

@include rwd(500) {
  .header {
    .inner {
      padding: 0;
      height: auto;
      flex-direction: column;
      &.login{
        padding-right: 5px;
        flex-direction: row;
      }
    }
    .hd_left {
      padding: 5px 10px;
    }
    .hd_right {
      width: 100%;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        border-radius: 0;
        background-image: conic-gradient(from 1turn, #fffea7, #d3d161);
        & + li {
          margin-left: 0;
        }
        &.regBtn {
          background-image: conic-gradient(from 1turn, #57d7ff, #1e50a6);
        }
      }
    }
  }
}
</style>

