<template>
  <div class="gamePage">
    <div class="game-livebox">
      <!-- 左方骰子 -->
      <div class="dice_L">
        <img src="@/assets/images/at_casino/dice_gold.png" />
      </div>
      <!-- 左方撲克 -->
      <div class="poker_L">
        <img src="@/assets/images/at_casino/poker_move.png" />
      </div>
      <!-- 右方金幣 -->
      <div class="gold_R">
        <img src="@/assets/images/at_casino/gold_move.png" />
      </div>
      <!-- 撲克牌展開 -->
      <div class="pokerBox">
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_01.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_02.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_03.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_04.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_05.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_06.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_07.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_08.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_09.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_10.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_11.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_12.png" />
        </div>
        <div class="pokerItem">
          <img src="@/assets/images/at_casino/pok_13.png" />
        </div>
      </div>
    </div>

    <div class="gameBox"></div>
  </div>
</template>
      
      
      
<script setup>
import {} from "@/api/api";
import { onMounted, ref } from "vue";
import Paginator from "@/components/Paginator.vue";
</script>
    <style lang="scss" scoped>
@import "@/scss/method.scss";
@import "@/scss/shared.scss";

.gamePage {
  padding-bottom: 50px;
  background: repeat-y url("@/assets/images/bg/homeCnt.webp");
  @at-root .game-livebox {
    max-width: 1400px;
    height: 50vw;
    max-height: 700px;
    margin: auto;
    background: url("@/assets/images/at_casino/live-bg.webp") no-repeat center
      bottom / cover;
    overflow: hidden;
    position: relative;
    // 左方骰子
    .dice_L {
      width: 3.5%;
      margin: auto;
      position: absolute;
      @include pos(tl, 37%, 27%);
      animation: dice_L ease-in-out infinite 5.3s;
    }
    // 左方撲克
    .poker_L {
      width: 5.5%;
      margin: auto;
      position: absolute;
      @include pos(bl, 32%, 24%);
      animation: poker_L ease-in-out infinite 4s;
    }
    // 右方金幣
    .gold_R {
      width: 5%;
      margin: auto;
      position: absolute;
      @include pos(tr, 8%, 31%);
      animation: gold_R ease-in-out infinite 5s;
    }
    // 撲克牌展開
    .pokerBox {
      width: 100%;
      height: 100%;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      animation: pokerBox 2s 0.9s linear infinite;
      .pokerItem {
        width: 6%;
        position: absolute;
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.5));
        transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
        @include pos(tr, 43%, 28%);

        &:nth-child(2) {
          @include rotatePoker("pok02", "0.1s", 2);
        }
        &:nth-child(3) {
          @include rotatePoker("pok03", "0.2s", 3);
        }
        &:nth-child(4) {
          @include rotatePoker("pok04", "0.3s", 4);
        }
        &:nth-child(5) {
          @include rotatePoker("pok05", "0.35s", 5);
        }
        &:nth-child(6) {
          @include rotatePoker("pok06", "0.4s", 6);
        }
        &:nth-child(7) {
          @include rotatePoker("pok07", "0.45s", 7);
        }
        &:nth-child(8) {
          @include rotatePoker("pok08", "0.5s", 8);
        }
        &:nth-child(9) {
          @include rotatePoker("pok09", "0.55s", 9);
        }
        &:nth-child(10) {
          @include rotatePoker("pok10", "0.6s", 10);
        }
        &:nth-child(11) {
          @include rotatePoker("pok11", "0.7s", 11);
        }
        &:nth-child(12) {
          @include rotatePoker("pok12", "0.8s", 12);
        }
        &:nth-child(13) {
          @include rotatePoker("pok13", "0.8s", 13);
        }
      }
    }
  }
  @at-root .gameBox {
    width: calc(100vw - 30px);
    max-width: 1320px;
    padding: 10px 10px 20px;
    margin: auto;
  }
}

// 左方骰子動畫
@keyframes dice_L {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(400deg) scale(1.3);
  }
}
// 左方撲克移動動畫
@keyframes poker_L {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-15%, 30%);
  }
}
// 右方金幣移動動畫
@keyframes gold_R {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-18%, 20%);
  }
}
// 整副撲克浮動
@keyframes pokerBox {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1%);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
      
      