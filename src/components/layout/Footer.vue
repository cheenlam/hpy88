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
              <li><router-link to="/Sports">體育博彩</router-link></li>
              <li><router-link to="/Casino">真人娛樂</router-link></li>
              <li><router-link to="/Computer">電子遊戲</router-link></li>
            </ul>
          </ul>
        </div>
        <div class="linkMenu">
          <div class="title">本站訊息</div>
          <ul>
            <ul>
              <li><router-link to="">關於我們</router-link></li>
              <li><router-link to="">聯絡我們</router-link></li>
              <li><router-link to="">常見問題</router-link></li>
              <li><router-link to="">條款與條規</router-link></li>
            </ul>
          </ul>
        </div>
      </div>

      <!-- 網站連結min -->
      <div class="ft_linkMin">
        <ul>
          <li><router-link to="/Sports">體育博彩</router-link></li>
          <li><router-link to="/Casino">真人娛樂</router-link></li>
          <li><router-link to="/Computer">電子遊戲</router-link></li>
          <li><router-link to="">關於我們</router-link></li>
          <li><router-link to="">聯絡我們</router-link></li>
          <li><router-link to="">常見問題</router-link></li>
          <li><router-link to="">條款與條規</router-link></li>
        </ul>
      </div>
    </div>
    <!-- 版權宣告 -->
    <div class="copyright">
      <p>&copy; Copyright 2022 HPY88</p>
    </div>
  </div>
</template>



<script setup>
import {} from "@/api/api";
import { onMounted, ref } from "vue";

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

</style>

