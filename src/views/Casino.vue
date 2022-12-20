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
        <div class="pokerItem" v-for="(item, index) in 13" :key="index">
          <img :src="repokerSrc(item)" />
        </div>
      </div>
    </div>

    <div class="gameBox">
      <div class="gameInner">
        <div class="gameSel">
          <ul>
            <li :class="{ on: gameSel == 0 }" @click="gameSel = 0"><img src="@/assets/images/hallList/min/live-ab.webp" /></li>
            <li :class="{ on: gameSel == 1 }" @click="gameSel = 1"><img src="@/assets/images/hallList/min/live-dg.webp" /></li>
            <li :class="{ on: gameSel == 2 }" @click="gameSel = 2"><img src="@/assets/images/hallList/min/live-sa.webp" /></li>
            <li :class="{ on: gameSel == 3 }" @click="gameSel = 3"><img src="@/assets/images/hallList/min/live-wm.webp" /></li>
          </ul>
        </div>
        <div class="gameList">
          <div class="pageTag"><Paginator :nowPage="1" :totalPage="2" /></div>
          <ul>
            <li>
              <img src="@/assets/images/casinoList/baccarat_01.jpg">
              <p>Baccarat 1</p>
              <div class="assets">
                <img src="@/assets/images/casinoList/assets_01.svg">
              </div>
            </li>
            <li>
              <img src="@/assets/images/casinoList/baccarat_02.jpg">
              <p>Baccarat 2</p>
              <div class="assets">
                <img src="@/assets/images/casinoList/assets_02.svg">
              </div>
            </li>  
            <li>
              <img src="@/assets/images/casinoList/baccarat_03.jpg">
              <p>Baccarat 3</p>
              <div class="assets">
                <img src="@/assets/images/casinoList/assets_01.svg">
              </div>
            </li>  
            <li>
              <img src="@/assets/images/casinoList/baccarat_04.jpg">
              <p>Baccarat 4</p>
              <div class="assets">
                <img src="@/assets/images/casinoList/assets_01.svg">
              </div>
            </li>  
            <li>
              <img src="@/assets/images/casinoList/baccarat_05.jpg">
              <p>Baccarat 5</p>
              <div class="assets">
                <img src="@/assets/images/casinoList/assets_02.svg">
              </div>
            </li> 
            <li>
              <img src="@/assets/images/casinoList/baccarat_06.jpg">
              <p>Baccarat 6</p>
              <div class="assets">
                <img src="@/assets/images/casinoList/assets_02.svg">
              </div>
            </li> 

            <li>
              <img src="@/assets/images/casinoList/dragon-tiger.jpg">
              <p>Dragon Tiger</p>
              <div class="assets">
                <img src="@/assets/images/casinoList/assets_03.svg">
              </div>
            </li>  
            <li>
              <img src="@/assets/images/casinoList/roulette.jpg">
              <p>Roulette</p>
              <div class="assets">
                <img src="@/assets/images/casinoList/assets_04.svg">
              </div>
            </li>  
            <li>
              <img src="@/assets/images/casinoList/sicbo.jpg">
              <p>Sic Bo</p>
              <div class="assets">
                <img src="@/assets/images/casinoList/assets_05.svg">
              </div>
            </li>  
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
      
      
      
<script setup>
import {} from "@/api/api";
import { onMounted, ref } from "vue";
import Paginator from "@/components/Paginator.vue";
const gameSel = ref(0);

// 返回所有撲克牌圖片路徑
const repokerSrc = (num) => {
  return new URL(
    `/src/assets/images/at_casino/pok_${String(num).padStart(2, "0")}.png`,
    import.meta.url
  ).href;
};
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
    margin: 0 auto 10px;
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
    width: calc(100% - 15px);
    max-width: 1320px;
    padding: 10px 10px 20px;
    margin: auto;
    border: 2px solid #fff;
    border-radius: 5px;
    background: linear-gradient(180deg, #edf6ff, #fff 53.65%, #f0f7ff);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    .gameInner {
      display: flex;
      font-size: 14px;
    }
    .gameSel {
      padding-top: 40px;
      margin-right: 10px;
      flex-shrink: 0;
      li {
        width: 100px;
        filter: grayscale(100%) drop-shadow(2px 2px 2px rgba(6, 10, 22, 0.5));
        cursor: pointer;
        transition: transform 0.3s;
        & + li {
          margin-top: 8px;
        }
        &.on {
          filter: grayscale(0%) drop-shadow(2px 2px 2px rgba(6, 10, 22, 0.5));
          transform: translateY(-2px);
        }
      }
    }
    .pageTag {
      height: 40px;
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .gameList {
      width: 100%;
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      li {
        width: calc(100% / 4 - 8px);
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;

        @include rwd(1200) {
          width: calc(100% / 3 - 8px);
        }
        @include rwd(800) {
          width: calc(100% / 2 - 8px);
        }
        @include hover{
          &:hover{
            p{
              display: none;
            }
            .assets{
              transform: translateY(0%);
              transition: .3s;
            }
          }
        }
      }
      p {
        width: 100%;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        position: absolute;
        @include pos(bl,0);
        font-size: 12px;
      }
      .assets{
        width: 100%;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        @include pos(bl,0);
        transform: translateY(100%);
      }
    }

    @include rwd(450) {
      .gameInner {
        flex-direction: column;
      }
      .gameSel {
        padding: 0 20px 10px 0;
        display: flex;
        overflow-x: scroll;

        ul {
          display: flex;
        }
        li {
          width: 90px;
        }
        li + li {
          margin: 0 0 0 10px;
        }
      }
    }
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
      
      