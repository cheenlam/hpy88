<template>
  <div class="footer">
    <div class="inner">
      <!-- 外部連結 + 推薦 -->
      <div class="ft_plat">
        <div class="item">
          <div class="title">關注我們</div>
          <ul>
            <li>
              <router-link to=""
                ><img src="@/assets/images/icon/fb.svg" alt="facebook"
              /></router-link>
            </li>
            <li>
              <router-link to=""
                ><img src="@/assets/images/icon/ig.svg" alt="instagram"
              /></router-link>
            </li>
            <li>
              <router-link to=""
                ><img src="@/assets/images/icon/tw.svg" alt="twitter"
              /></router-link>
            </li>
            <li>
              <router-link to=""
                ><img src="@/assets/images/icon/yt.svg" alt="youtube"
              /></router-link>
            </li>
          </ul>
        </div>

        <div class="item">
          <div class="title">推薦瀏覽器</div>
          <ul>
            <li><img src="@/assets/images/icon/chrome.webp" alt="chrome" /></li>
            <li><img src="@/assets/images/icon/edge.webp" alt="edge" /></li>
            <li>
              <img src="@/assets/images/icon/firefox.webp" alt="firefox" />
            </li>
          </ul>
        </div>

        <div class="item">
          <div class="title">年齡限制</div>
          <ul>
            <li><img src="@/assets/images/icon/18plus.webp" alt="18+" /></li>
            <li>
              <img src="@/assets/images/icon/gamcare.webp" alt="gamcare" />
            </li>
          </ul>
        </div>
      </div>

      <!-- 網站連結 -->
      <div class="ft_link">
        <div class="linkMenu">
          <div class="title">遊戲類別</div>
          <ul>
            <ul>
              <li><router-link to="/Sports">体育博彩</router-link></li>
              <li><router-link to="/Casino">真人娱乐</router-link></li>
              <li><router-link to="/Computer">电子游戏</router-link></li>
            </ul>
          </ul>
        </div>
        <div class="linkMenu">
          <div class="title">本站訊息</div>
          <ul>
            <ul>
              <li><router-link to="">關於我們</router-link></li>
              <li><router-link to="">聯絡我們</router-link></li>
              <li><router-link to="/InfoCentre/faqs">常见问题</router-link></li>
              <li><router-link to="/InfoCentre/terms">条款与条规</router-link></li>
            </ul>
          </ul>
        </div>
      </div>

      <!-- 網站連結min -->
      <div class="ft_linkMin">
        <ul>
          <li><router-link to="/Sports">体育博彩</router-link></li>
          <li><router-link to="/Casino">真人娱乐</router-link></li>
          <li><router-link to="/Computer">电子游戏</router-link></li>
          <li><router-link to="">關於我們</router-link></li>
          <li><router-link to="">聯絡我們</router-link></li>
          <li><router-link to="/InfoCentre/faqs">常见问题</router-link></li>
          <li><router-link to="/InfoCentre/terms">条款与条规</router-link></li>
        </ul>
      </div>
    </div>
    <!-- 版權宣告 -->
    <div class="copyright">
      <p>&copy; Copyright 2022 HPY88</p>
    </div>
  </div>

  <!-- tawk客服軟體 -->
  <div class="tawkBtn" @click="tawkSw = !tawkSw">
    <img src="@/assets/images/icon/talk_w.svg" alt="tawkBtn" />
  </div>
  <div class="tawkBox" :class="{'on' : tawkSw}">
      <div class="tawkClose" @click="tawkSw = false"></div>
      <div id='tawk_63c899b1c2f1ac1e202e7000' class="tawkDialog"></div>
  </div>
</template>



<script setup>
import { onMounted, ref } from "vue";
const emit = defineEmits([]);
const footRef = ref(null);
const tawkSw = ref(false);


const init = onMounted(() => {});
</script>

<style lang="scss" scoped>
@import "@/scss/method.scss";
@import "@/scss/shared.scss";

.footer {
  background-color: #184a90;
  color: #c5c5c5;
  .inner {
    max-width: 1320px;
    margin: auto;
    padding: 25px 10px;
    // 外部連結 + 推薦
    @at-root .ft_plat {
      margin-bottom: 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px 30px;
      .item {
        font-size: 14px;
      }
      .title {
        margin-bottom: 5px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #fff;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
      }
      li {
        padding-bottom: 10px;
      }
      li + li {
        margin-left: 8px;
      }
      img {
        height: 35px;
      }
    }
    // 網站連結
    @at-root .ft_link {
      display: flex;
      justify-content: center;
      font-size: 14px;
      .linkMenu {
        display: flex;
        align-items: center;
        .title {
          margin-right: 10px;
          padding: 3px 10px;
          background-color: rgb(42, 30, 88);
          border: 1px solid #999;
          font-weight: bold;
          border-radius: 3px;
          color: #fff;
          letter-spacing: 1px;
        }
        ul {
          height: 100%;
          display: flex;
        }
        li {
          height: 100%;
          position: relative;     
          a{
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
        li + li {
          margin-left: 20px;
          &::before {
            content: "";
            width: 2px;
            height: 15px;
            margin: auto;
            background-color: #fff;
            position: absolute;
            @include pos(tbl,0,0,-10px)
          }
        }
      }
      .linkMenu + .linkMenu {
        margin-left: 50px;
      }
    }

    // 網站連結min
    @at-root .ft_linkMin{
      font-size: 15px;
      display: none;
      ul{
        width: 100%;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }
      li{
        min-width: calc(100% / 3 - 5px);
        display: flex;
        flex: 1;
        border: 1px solid #ccc;
        border-radius: 3px;
        color: #fff;
        font-weight: bold;
        background: linear-gradient(180deg, #57d7ff 0%, #1e50a6 100%);
      }
      a{
        width: 100%;
        padding: 10px 5px;
        text-align: center;
      }
    }
  }
  // 版權宣告
  .copyright {
    padding: 10px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

// ===== rwd =====
@include rwd(800) {
  .footer{
    .inner{
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .ft_link {
    margin-bottom: 25px;
    .linkMenu {
      align-items: flex-start;
      .title{
        margin-top: 3px;
      }
      ul {
        padding-left: 5px;
        flex-direction: column;
      }
      li,li+li {
        height: 35px;
        margin: 0;
        padding: 0;
        position: relative;
        &::before {
          content: "";
          width: 2px;
          height: 15px;
          margin: auto;
          background-color: #fff;
          position: absolute;
          @include pos(tbl,0,0,-8px);
        }
      }
    }
  }
  .ft_plat{
    margin-bottom: 0;
  }
}
@include rwd(500){
  .footer{
    .inner{
      padding: 8px;
    }
  }
  .ft_plat,
  .ft_link{
   display: none;
  }
  .ft_linkMin{
    display: block;
  }
}

@include rwd(400){
  .ft_linkMin{
    li{
      min-width: calc(100% / 2 - 5px);
    }
  }
}


// tawk客服軟體
.tawkBtn {
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  background: linear-gradient(180deg, #22a7fb, #6dc5fc);
  box-shadow: 0 0 8px #063755;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  @include pos(br, calc(15% + 57px), 1%);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 62%;
  }
}
.tawkBox {
    width: 350px;
    height: calc(100vh - 20px);
    max-height: 550px;
    padding: 32px 0 0;
    margin: auto;
    position: fixed;
    @include pos(tbrl, 0);
    background-color: #fff;
    box-shadow: 0 0 8px #000;
    z-index: -99;
    opacity: 0;
    transform-origin: center bottom;
    transform: scaleY(0.1);
    transition: .5s;
    &.on {
        z-index: 99;
        transform: scaleY(1);
        opacity: 1;
    }
    @include phone {
        width: 100%;
        height: 100%;
        max-height: 100%;
        margin: unset;
        padding: 40px 0;
        position: fixed;
        bottom: unset;
    }
    .tawkClose {
        width: 22px;
        height: 22px;
        position: absolute;
        @include pos(tr, 6px, 10px);
        z-index: 99;
        border-radius: 50%;
        border: 1px solid #999;
        cursor: pointer;
        opacity: 0.6;
        transition: 0.3s;
        @include hover {
            &:hover {
                opacity: 1;
            }
        }
        @include phone {
            width: 30px;
            height: 30px;
            opacity: 1;
            transition: unset;
        }
        &::after,
        &::before {
            content: "";
            width: calc(100% - 8px);
            height: 2px;
            margin: auto;
            background-color: #999;
            position: absolute;
            @include pos(tbrl, 0);
        }
        &::after {
            transform: rotate(45deg);
        }
        &::before {
            transform: rotate(-45deg);
        }
    }
    .tawkDialog {
        width: 100%;
        height: 100%;
        position: relative;
        @include phone {
            width: calc(100% + 2px);
            &::before {
                content: "";
                width: 100%;
                height: 2px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: #fff;
                z-index: 2000000001;
            }
        }
    }
}

</style>

