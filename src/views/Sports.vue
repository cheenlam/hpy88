<template>
  <div class="gamePage">
    <div class="game-sportBox">
      <!-- 紙片 -->
      <div class="paper">
        <span></span>
        <span></span>
      </div>
      <!-- 球員 -->
      <div class="player_01">
        <img src="@/assets/images/at_sport/player_01.webp" />
      </div>
      <div class="player_02">
        <img src="@/assets/images/at_sport/player_02.webp" />
      </div>
      <!-- 旋風 -->
      <div class="whirlwind"></div>
      <!-- 足球 -->
      <div class="footBall">
        <img src="@/assets/images/at_sport/footBall.png" />
      </div>
      <!-- 破裂 -->
      <div class="rupture">
        <img src="@/assets/images/at_sport/rupture.png" />
      </div>
    </div>

    <div class="introduce">
      <div class="title">
        <p>体育赛事</p>
        <span>SPORTS</span>
      </div>
      <div class="ann">
        每月提供上万场体育赛事投注，经典赛事一应俱全。业内赔率最高！覆盖世界各地赛事,让球、大小、半全场、波胆、单双、总入球、连串过关等多元竞猜，让您畅游轻松娱乐投注。
      </div>
      <div class="sportSort">
        <img src="@/assets/images/bg/sportSort.png" />
      </div>
    </div>

    <div class="gameBox">
      <div class="gameSel">
        <ul>
          <li :class="{'on' : selNum == 0}" @click="selNum = 0">
            <img src="@/assets/images/selList_test/sport_cmd.jpg" />
          </li>
          <li :class="{'on' : selNum == 1}" @click="selNum = 1">
            <img src="@/assets/images/selList_test/sport_m8.jpg" />
          </li>
        </ul>
      </div>
      <div class="gameList" v-if="selNum == 0">
        <div class="gameMsg">
          <h5>C-Sports</h5>
          <p>
            C-Sports是一款由CMD368开发并推出的体育博彩游戏。CMD368基于实时体育动态和体育市场热点提供相应的博彩服务，其中包括但不仅限于篮球、足球、电竞、高尔夫球和羽毛球等赛事。
          </p>
        </div>
        <div class="btnBox">
          <button>进入游戏</button>
        </div>
        <div class="bottom_img cmd"></div>
      </div>
      <div class="gameList" v-if="selNum == 1">
        <div class="gameMsg">
          <h5>M8-Sports</h5>
          <p>
            M8体育博彩是一款由M8bet提供的体育博彩游戏。M8体育拥有实时的足球比赛结果，最更新的赔率和内置的快速赔付。通过M8体育博彩，玩家可每周享受超过3000场的地区和国际体育赛事，包括但不限于足球、篮球、网球和羽毛球等。
          </p>
        </div>
        <div class="btnBox">
          <button>进入游戏</button>
        </div>
        <div class="bottom_img m8"></div>
      </div>
    </div>
  </div>
</template>
    
    
    
  <script setup>
import {} from "@/api/api";
import { onMounted, ref } from "vue";
import Paginator from "@/components/Paginator.vue";

const selNum = ref(0);



</script>
  <style lang="scss" scoped>
@import "@/scss/method.scss";
@import "@/scss/shared.scss";

.gamePage {
  @at-root .game-sportBox {
    max-width: 1400px;
    height: 50vw;
    max-height: 700px;
    margin: auto;
    background: url("@/assets/images/at_sport/sport-bg.webp") no-repeat center
      bottom / cover;
    position: relative;
    overflow: hidden;
    // 紙片
    .paper {
      width: 100%;
      height: 100%;
      position: absolute;
      @include pos(tl, 0);
      span {
        width: 100%;
        margin: auto;
        position: absolute;
        @include pos(tbrl, 0);
        opacity: 0;
        &:nth-child(1) {
          background: url("@/assets/images/at_sport/paper.png") no-repeat center /
            cover;
          animation: paper 8s linear infinite;
        }
        &:nth-child(2) {
          background: url("@/assets/images/at_sport/paper.png") no-repeat 40%
            50% / cover;
          animation: paper 8s 4s linear infinite;
        }
      }
    }
    // 球員
    .player_01 {
      width: 85%;
      margin: auto;
      position: absolute;
      @include pos(tlr, 10%, 0, 0);
      transform: translateX(-42%);
      opacity: 1;
      animation: playerMove 1s 0.2s forwards linear,
        playerMove_02 0.5s 2.5s forwards linear;
    }
    .player_02 {
      width: 85%;
      margin: auto;
      position: absolute;
      @include pos(tlr, 0);
      transform: translateX(52%);
      opacity: 0;
      animation: playerMove_03 0.5s 2.5s forwards linear;
    }
    // 旋風
    .whirlwind {
      width: 35%;
      height: 35%;
      margin: auto;
      background: url("@/assets/images/at_sport/whirlwind.png") no-repeat center /
        cover;
      position: absolute;
      @include pos(blr, 20%, 0, 0);
      animation: whirlwind 1s forwards linear,
        whirlwind_02 2s 2.5s linear infinite;
    }
    // 足球
    .footBall {
      width: 40%;
      margin: auto;
      position: absolute;
      @include pos(blr, -0.5%, 0, 0);
      transform: scale(0.18);
      animation: footBall 1.5s forwards linear,
        footBall_02 0.5s 2s forwards linear,
        footBall_03 0.15s 2.5s infinite linear;
    }
    // 破裂
    .rupture {
      width: 45%;
      margin: auto;
      position: absolute;
      @include pos(blr, 6%, 0, 0);
      opacity: 0;
      animation: rupture 1s 0.6s forwards;
    }
  }

  @at-root .introduce {
    max-width: 500px;
    margin: auto;
    padding: 10px;
    font-size: 14px;
    .title {
      text-align: center;
      font-size: 18px;
      color: #3688cb;
      letter-spacing: 1px;
      p {
        font-size: 30px;
        color: #285aa1;
        font-weight: bold;
      }
    }
    .ann {
      margin: 10px 0 20px;
      line-height: 21px;
      color: #999;

    }
    .sportSort {
      max-width: 300px;
      margin: auto;
    }
  }

  @at-root .gameBox {
    max-width: 1320px;
    padding: 20px 10px 0;
    margin: auto;
    @at-root .gameSel {
      margin-bottom: 25px;
      ul {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      li {
        max-width: 170px;
        border-radius: 5px;
        overflow: hidden;
        filter: grayscale(100%) drop-shadow(2px 2px 2px rgba(6, 10, 22, 0.5));
        cursor: pointer;
        &.on {
          filter: grayscale(0%) drop-shadow(2px 2px 2px rgba(6, 10, 22, 0.5));
          transform: scale(1.05);
        }
      }
    }

    @at-root .gameList {
      .gameMsg {
        max-width: 500px;
        margin: 0 auto 30px;
        color: #999;
        font-size: 14px;
        h5 {
          padding-bottom: 10px;
          font-size: 28px;
          font-weight: bold;
          color: #333;
          text-align: center;
        }
        p {
          line-height: 22px;
        }
      }
      .btnBox {
        width: 100%;
        max-width: 300px;
        margin: auto;
        button {
          @include fullNone;
          width: 100%;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: bold;
          background: linear-gradient(180deg, #57d7ff 0%, #1e50a6 100%);
          color: #fff;
          cursor: pointer;
        }
      }
      .bottom_img{
        height: 420px;
        background:  no-repeat center bottom / 1300px auto;
        position: relative;
        &::before,
        &::after{
          content: '';
          width: 10%;
          height: 100%;
          position: absolute;
        }
        &::before{
          background: linear-gradient(90deg,#fff,transparent);
          @include pos(tl,0);
        }
        &::after{
          background: linear-gradient(-90deg,#fff,transparent);
          @include pos(tr,0);
        }

        &.cmd{
          background-image: url("@/assets/images/bg/sport_cmdBg.jpg");
        }
        &.m8{
          background-image: url("@/assets/images/bg/sport_m8Bg.jpg");
        }
      }
    }
  }
}

// 紙片飛散動畫
@keyframes paper {
  0% {
    opacity: 0;
    transform: scale3d(0.6, 0.6, 1);
  }
  1% {
    opacity: 0.2;
    transform: scale3d(0.6, 0.6, 1);
  }
  60% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.1;
    transform: scale3d(2, 2, 1) rotate(30deg);
  }
}
// 球員演示動畫
@keyframes playerMove {
  0% {
    opacity: 1;
  }
  50% {
    filter: blur(10px);
  }
  100% {
    opacity: 0;
    filter: blur(10px);
  }
}
@keyframes playerMove_02 {
  0% {
    transform: translateX(-39%);
    filter: blur(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(-42%);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes playerMove_03 {
  0% {
    transform: translateX(49%);
    filter: blur(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(52%);
    filter: blur(0px);
    opacity: 1;
  }
}
// 足球旋風動畫
@keyframes whirlwind {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
    opacity: 0;
  }
}
@keyframes whirlwind_02 {
  0% {
    transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(360deg);
    opacity: 0.8;
  }
  100% {
    transform: rotate(720deg);
    opacity: 0.2;
  }
}
// 足球飛越動畫
@keyframes footBall {
  0%,
  4%,
  8%,
  12%,
  16% {
    transform: translateX(0px) scale(0.18);
  }
  2%,
  10%,
  18% {
    transform: translateX(5px) scale(0.18);
  }
  6%,
  14% {
    transform: translateX(-5px) scale(0.18);
  }
  20% {
    transform: rotate(0deg) scale(0.18);
  }
  40%,
  75% {
    transform: rotate(-250deg) scale(1) translateY(-10%);
    opacity: 1;
  }
  100% {
    transform: rotate(-250deg) scale(1) translate3d(30px, -10%, 0);
    opacity: 0;
  }
}
@keyframes footBall_02 {
  0% {
    transform: translateY(20%) scale(0.18);
    opacity: 0;
  }
  100% {
    transform: translateX(0px) scale(0.18);
    opacity: 1;
  }
}
@keyframes footBall_03 {
  0%,
  50%,
  100% {
    transform: translateX(0px) scale(0.18);
  }
  25% {
    transform: translateX(2px) scale(0.18);
  }
  75% {
    transform: translateX(-2px) scale(0.18);
  }
}
// 破裂展示動畫
@keyframes rupture {
  0%,
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
    
    