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

    <div class="a1"></div>

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

  @at-root .gameBox {
    width: calc(100vw - 30px);
    max-width: 1320px;
    padding: 10px 10px 20px;
    margin: auto;
  }
}

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
      animation: livepok01 0.1s forwards linear;
    }
    &:nth-child(3) {
      animation: livepok02 0.2s forwards linear;
    }
    &:nth-child(4) {
      animation: livepok03 0.3s forwards linear;
    }
    &:nth-child(5) {
      animation: livepok04 0.35s forwards linear;
    }
    &:nth-child(6) {
      animation: livepok05 0.4s forwards linear;
    }
    &:nth-child(7) {
      animation: livepok06 0.45s forwards linear;
    }
    &:nth-child(8) {
      animation: livepok07 0.5s forwards linear;
    }
    &:nth-child(9) {
      animation: livepok08 0.55s forwards linear;
    }
    &:nth-child(10) {
      animation: livepok09 0.6s forwards linear;
    }
    &:nth-child(11) {
      animation: livepok10 0.7s forwards linear;
    }
    &:nth-child(12) {
      animation: livepok11 0.8s forwards linear;
    }
    &:nth-child(13) {
      animation: livepok12 0.9s forwards linear;
    }
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

@mixin test($num) {
  animation: aaa 0.9s infinite linear;
  @keyframes aaa {
    0% {
      transform: translateY(0);
    }
    @for $i from 1 through $num {
      #{reaaa($i,$num) + "%"} {
        transform: translateY(20px);
      }
    }
  }
}

@function reaaa($i,$num) {
  @return 100 / $num * $i;
}

.a1 {
  width: 100px;
  height: 100px;
  background-color: #000;
  @include test(9);
}

@keyframes livepok01 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  100% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
}

@keyframes livepok02 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  50% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  100% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
}

@keyframes livepok03 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  33% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  66% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  100% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
}

@keyframes livepok04 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  25% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  50% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  75% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
  100% {
    transform: rotateX(55deg) rotateY(-20deg) rotate(58deg) scale(0.6);
    @include pos(tr, 40.5%, 15%);
  }
}

@keyframes livepok05 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  20% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  40% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  60% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
  80% {
    transform: rotateX(55deg) rotateY(-20deg) rotate(50deg) scale(0.6);
    @include pos(tr, 40.5%, 15%);
  }
  100% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(66deg) scale(0.65);
    @include pos(tr, 42.5%, 13.5%);
  }
}

@keyframes livepok06 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  16.6% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  33.2% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  49.8% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
  66.4% {
    transform: rotateX(55deg) rotateY(-20deg) rotate(50deg) scale(0.6);
    @include pos(tr, 40.5%, 15%);
  }
  83% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(66deg) scale(0.65);
    @include pos(tr, 42.5%, 13.5%);
  }
  100% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(80deg) scale(0.7);
    @include pos(tr, 45%, 12%);
  }
}

@keyframes livepok07 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  14.2% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  28.2% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  42.6% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
  56.8% {
    transform: rotateX(55deg) rotateY(-20deg) rotate(50deg) scale(0.6);
    @include pos(tr, 40.5%, 15%);
  }
  71% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(66deg) scale(0.65);
    @include pos(tr, 42.5%, 13.5%);
  }
  85.5% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(80deg) scale(0.7);
    @include pos(tr, 45%, 12%);
  }
  100% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(97deg) scale(0.75);
    @include pos(tr, 49%, 12.5%);
  }
}

@keyframes livepok08 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  12.5% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  25% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  37.5% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
  50% {
    transform: rotateX(55deg) rotateY(-20deg) rotate(50deg) scale(0.6);
    @include pos(tr, 40.5%, 15%);
  }
  62.5% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(66deg) scale(0.65);
    @include pos(tr, 42.5%, 13.5%);
  }
  75% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(80deg) scale(0.7);
    @include pos(tr, 45%, 12%);
  }
  87% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(97deg) scale(0.75);
    @include pos(tr, 49%, 12.5%);
  }
  100% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(115deg) scale(0.8);
    @include pos(tr, 54%, 14.2%);
  }
}

@keyframes livepok09 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  11.1% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  22.2% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  33.3% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
  44.4% {
    transform: rotateX(55deg) rotateY(-20deg) rotate(50deg) scale(0.6);
    @include pos(tr, 40.5%, 15%);
  }
  55.5% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(66deg) scale(0.65);
    @include pos(tr, 42.5%, 13.5%);
  }
  66.6% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(80deg) scale(0.7);
    @include pos(tr, 45%, 12%);
  }
  77.7% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(97deg) scale(0.75);
    @include pos(tr, 49%, 12.5%);
  }
  88.8% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(115deg) scale(0.8);
    @include pos(tr, 54%, 14.2%);
  }
  100% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(130deg) scale(0.85);
    @include pos(tr, 60%, 18%);
  }
}

@keyframes livepok10 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  10% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  20% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  30% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
  40% {
    transform: rotateX(55deg) rotateY(-20deg) rotate(50deg) scale(0.6);
    @include pos(tr, 40.5%, 15%);
  }
  50% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(66deg) scale(0.65);
    @include pos(tr, 42.5%, 13.5%);
  }
  60% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(80deg) scale(0.7);
    @include pos(tr, 45%, 12%);
  }
  70% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(97deg) scale(0.75);
    @include pos(tr, 49%, 12.5%);
  }
  80% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(115deg) scale(0.8);
    @include pos(tr, 54%, 14.2%);
  }
  90% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(130deg) scale(0.85);
    @include pos(tr, 60%, 18%);
  }
  100% {
    transform: rotateX(41deg) rotateY(2deg) rotate(145deg) scale(0.9);
    @include pos(tr, 66%, 23.6%);
  }
}

@keyframes livepok11 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  9% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  18% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  27% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
  36% {
    transform: rotateX(55deg) rotateY(-20deg) rotate(50deg) scale(0.6);
    @include pos(tr, 40.5%, 15%);
  }
  45% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(66deg) scale(0.65);
    @include pos(tr, 42.5%, 13.5%);
  }
  54% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(80deg) scale(0.7);
    @include pos(tr, 45%, 12%);
  }
  63% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(97deg) scale(0.75);
    @include pos(tr, 49%, 12.5%);
  }
  72% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(115deg) scale(0.8);
    @include pos(tr, 54%, 14.2%);
  }
  81% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(130deg) scale(0.85);
    @include pos(tr, 60%, 18%);
  }
  90% {
    transform: rotateX(41deg) rotateY(2deg) rotate(145deg) scale(0.9);
    @include pos(tr, 66%, 23.6%);
  }
  100% {
    transform: rotateX(35deg) rotateY(-1deg) rotate(162deg) scale(0.95);
    @include pos(tr, 71%, 30.5%);
  }
}

@keyframes livepok12 {
  0% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(2deg) scale(0.55);
    @include pos(tr, 43%, 28%);
  }
  8.3% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(16deg) scale(0.55);
    @include pos(tr, 41%, 24%);
  }
  16.6% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(30deg) scale(0.55);
    @include pos(tr, 40%, 20.1%);
  }
  24.9% {
    transform: rotateX(60deg) rotateY(-15deg) rotate(40deg) scale(0.57);
    @include pos(tr, 39.5%, 17%);
  }
  33.2% {
    transform: rotateX(55deg) rotateY(-20deg) rotate(50deg) scale(0.6);
    @include pos(tr, 40.5%, 15%);
  }
  41.5% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(66deg) scale(0.65);
    @include pos(tr, 42.5%, 13.5%);
  }
  49.8% {
    transform: rotateX(60deg) rotateY(-10deg) rotate(80deg) scale(0.7);
    @include pos(tr, 45%, 12%);
  }
  58.1% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(97deg) scale(0.75);
    @include pos(tr, 49%, 12.5%);
  }
  66.4% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(115deg) scale(0.8);
    @include pos(tr, 54%, 14.2%);
  }
  74.7% {
    transform: rotateX(40deg) rotateY(-10deg) rotate(130deg) scale(0.85);
    @include pos(tr, 60%, 18%);
  }
  83% {
    transform: rotateX(41deg) rotateY(2deg) rotate(145deg) scale(0.9);
    @include pos(tr, 66%, 23.6%);
  }
  91.7% {
    transform: rotateX(35deg) rotateY(-1deg) rotate(162deg) scale(0.95);
    @include pos(tr, 71%, 30.5%);
  }
  100% {
    transform: rotateX(34deg) rotateY(5deg) rotate(175deg) scale(1);
    @include pos(tr, 72%, 38.5%);
  }
}
</style>
      
      