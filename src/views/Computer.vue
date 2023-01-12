<template>
  <div class="gamePage">
    <div class="game-elecBox">
      <!-- 雲朵 -->
      <div class="cloud01">
        <img src="@/assets/images/at_slot/cloud01.png" />
      </div>
      <div class="cloud02">
        <img src="@/assets/images/at_slot/cloud02.png" />
      </div>

      <!-- 閃電 -->
      <div class="lightning01">
        <img src="@/assets/images/at_slot/lightning01.png" />
      </div>
      <div class="lightning02">
        <img src="@/assets/images/at_slot/lightning02.png" />
      </div>
      <div class="lightning03">
        <img src="@/assets/images/at_slot/lightning03.png" />
      </div>

      <!-- 主角 -->
      <div class="elec-man">
        <!-- 背光 -->
        <div class="backlight">
          <img src="@/assets/images/at_slot/backlight.png" />
        </div>

        <!-- 人物 -->
        <div class="people">
          <img src="@/assets/images/at_slot/elec-man.png" />
        </div>

        <!-- 手部纏繞光 -->
        <div class="twine">
          <img src="@/assets/images/at_slot/elec-man03-1.png" />
        </div>
      </div>
    </div>

    <div class="gameBox">
      <div class="gameInner">
        <div class="gameSel">
          <ul>
            <li
              v-for="(item, index) in selList"
              :key="index"
              :class="{ on: gameSel == index }"
              @click="gameSel = index,chgGameList(index)"
            >
              <img :src="getAssetsFile(item.imgSrc)" />
            </li>
          </ul>
        </div>
        <div class="gameList">
          <div class="pageTag">
            <Paginator
              :nowPage="nowPage"
              :totalPage="totalPage"
              @updatePage="updatePage"
            />
          </div>
          <ul>
            <li v-for="(item, index) in nowGameList" :key="index">
              <a :href="item.link" target="_blank">
                <img :src="reGameImg(item.folder,item.imgSrc)" />
                <p>{{ item.title }}</p>
              </a>
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
import { getHallList, getDwGames, getPgSlot , getKaSlot } from "@/api/api";

const gameSel = ref(0);
const selList = ref([]);
const dwGame = ref([]);

// 目前遊戲清單
const nowGameList = ref([]);
const nowPage = ref(1);
const totalPage = ref(1);

const setHallList = () => {
  getHallList().then((res) => {
    selList.value = res.min.slot;
  });
};


// 更改遊戲清單
const chgGameList = (index) => {
  switch(index){
    case 0: getDw(); break;
    case 1: getPg(); break;
    case 2: getKa(); break;
  }
};




// 取得DW遊戲
const getDw = () => {
  getDwGames().then((res) => {
    nowPage.value = 1;
    dwGame.value = res;
    totalPage.value = res.length == 0 ? 1 : Math.ceil(res.length / 24);

    nowGameList.value = dwGame.value.filter((item) => {
      return (
        dwGame.value.indexOf(item) >= (nowPage.value - 1) * 24 &&
        dwGame.value.indexOf(item) <= nowPage.value * 24 - 1
      );
    });
  });
}

// 取得PG遊戲
const getPg = () => {
  getPgSlot().then((res) => {
    nowPage.value = 1;
    dwGame.value = res;
    totalPage.value = res.length == 0 ? 1 : Math.ceil(res.length / 24);

    nowGameList.value = dwGame.value.filter((item) => {
      return (
        dwGame.value.indexOf(item) >= (nowPage.value - 1) * 24 &&
        dwGame.value.indexOf(item) <= nowPage.value * 24 - 1
      );
    });
  });
}

// 取得KA遊戲
const getKa = () => {
  getKaSlot().then((res) => {
    nowPage.value = 1;
    dwGame.value = res;
    totalPage.value = res.length == 0 ? 1 : Math.ceil(res.length / 24);

    nowGameList.value = dwGame.value.filter((item) => {
      return (
        dwGame.value.indexOf(item) >= (nowPage.value - 1) * 24 &&
        dwGame.value.indexOf(item) <= nowPage.value * 24 - 1
      );
    });
  });
}




const updatePage = (val) => {
  nowPage.value = val.value;

  nowGameList.value = dwGame.value.filter((item) => {
      return (
        dwGame.value.indexOf(item) >= (nowPage.value - 1) * 24 &&
        dwGame.value.indexOf(item) <= nowPage.value * 24 - 1
      );
    });
};


const getAssetsFile = (url) => {
  return new URL(`/src/assets/images/hallList/min/${url}.webp`, import.meta.url)
    .href;
};

const reGameImg = (folder,url) => {
  return new URL(`/src/assets/images/${folder}/${url}.webp`, import.meta.url)
    .href;
};


onMounted(() => {
  setHallList();
  getDw();
});


</script>
<style lang="scss" scoped>
@import "@/scss/method.scss";
@import "@/scss/shared.scss";

.gamePage {
  padding-bottom: 50px;
  background: repeat-y url("@/assets/images/bg/homeCnt.webp");
  // 開頭動畫 - slot
  @at-root .game-elecBox {
    max-width: 1400px;
    height: 50vw;
    max-height: 700px;
    margin: 0 auto 10px;
    background: url("@/assets/images/at_slot/elec-bg.webp") no-repeat center
      bottom / cover;
    overflow: hidden;
    position: relative;
    // 背景閃光
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      animation: glitter 5.7s infinite;
      opacity: 0;
    }
    // 雲朵
    .cloud01 {
      width: 75%;
      margin: auto;
      position: absolute;
      @include pos(tlr, 0);
      transform: translateX(-150%);
      animation: cloudMove_01 50s infinite linear;
    }
    .cloud02 {
      width: 60%;
      margin: auto;
      position: absolute;
      @include pos(tlr, 40%, 0, 0);
      transform: translateX(-200%);
      animation: cloudMove_02 50s 5s infinite linear;
    }
    // 閃電
    .lightning01 {
      width: 25%;
      margin: auto;
      position: absolute;
      @include pos(tlr, 0);
      animation: lightning 5.7s infinite;
    }
    .lightning02 {
      width: 20%;
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      animation: lightning 5.1s 2.33s infinite;
    }
    .lightning03 {
      width: 33%;
      margin: auto;
      position: absolute;
      top: -7%;
      right: 15%;
      animation: lightning 4s 3s infinite;
    }
    // 主角
    .elec-man {
      width: 55%;
      margin: auto;
      position: absolute;
      @include pos(brl, 7%, 12%, 0);
      transform: translateY(20%) scale(0.2);
      animation: elecMan 1s linear, elecMan_02 1s 1s forwards ease-in-out,
        elecMan_03 3s 2s linear infinite;
      // 人物
      .people {
        position: relative;
      }
      // 背光
      .backlight {
        width: 62%;
        margin: auto;
        position: absolute;
        @include pos(tlr, -14%, 12%, 0);
        opacity: 0;
        animation: backlight 1s 1.5s forwards linear,
          backlight_02 2s 2.5s infinite linear;
      }
      // 手部纏繞光
      .twine {
        width: 135%;
        position: absolute;
        top: 0;
        left: -20%;
        animation: twine 2s 2s infinite;
        opacity: 0;
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
      }
      li {
        width: calc(100% / 6);
        padding: 0 3px 10px;
        @include rwd(1070) {
          width: calc(100% / 5);
        }
        @include rwd(890) {
          width: calc(100% / 4);
        }
        @include rwd(700) {
          width: calc(100% / 3);
        }
      }
      p {
        padding: 0 5px;
        margin-top: 3px;
        text-align: center;
        font-size: 12px;
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

// 閃光特效
@keyframes glitter {
  0% {
    opacity: 0;
  }
  8%,
  12%,
  16% {
    opacity: 0.5;
  }
  10%,
  14% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
// 雲朵移動-上
@keyframes cloudMove_01 {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(150%);
  }
}
// 雲朵移動-下
@keyframes cloudMove_02 {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(200%);
  }
}
// 閃電特效
@keyframes lightning {
  0% {
    opacity: 0.5;
  }
  7.5% {
  }
  8%,
  12%,
  16% {
    opacity: 0.5;
  }
  10%,
  14% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
// 主角飛行特效
@keyframes elecMan {
  0% {
    transform: translateY(20%) scale(0.2);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0%) scale(2.5);
    opacity: 0;
  }
}
@keyframes elecMan_02 {
  0% {
    transform: translateX(20%) translateY(-50%) scale(0.4);
    opacity: 0;
  }
  100% {
    transform: translateX(0%) translateY(0%) scale(1);
    opacity: 1;
  }
}
@keyframes elecMan_03 {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0.5%, -0.5%, 0);
  }
}
// 背光特效
@keyframes backlight {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
@keyframes backlight_02 {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(0.96);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}
// 手部纏繞光特效
@keyframes twine {
  0% {
    opacity: 0;
  }
  7.5% {
  }
  8%,
  12%,
  16% {
    opacity: 0.5;
  }
  10%,
  14% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
  
  