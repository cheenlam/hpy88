<template>
  <div class="homeBox">
    <!-- 主要輪播 -->
    <div class="mainCarousel">
      <n-carousel loop draggable autoplay :show-arrow="true">
        <div class="carousel-img">
          <img src="@/assets/images/banner/main_01.webp" />
        </div>
        <div class="carousel-img">
          <img src="@/assets/images/banner/main_02.webp" />
        </div>
        <div class="carousel-img">
          <img src="@/assets/images/banner/main_03.webp" />
        </div>
      </n-carousel>
    </div>
    <!-- 公告訊息 -->
    <AnnBox></AnnBox>

    <div class="innerCnt">
      <!-- 活動輪播 -->
      <div class="manyCarousel">
        <n-carousel
          :slides-per-view="manyNum"
          :space-between="5"
          loop
          draggable
          autoplay
          :show-dots="false"
        >
          <a class="carousel-img">
            <img
              src="https://www.bk8usd.com/public/promotion/20221109071642-8958a11f-0c67-4ed5-a84b-c634ba763244.png"
            />
          </a>
          <a class="carousel-img">
            <img
              src="https://www.bk8usd.com/public/promotion/20221026200507-fcd9e3a6-fbaa-4e5c-a393-9c59697d1605.png"
            />
          </a>
          <a class="carousel-img">
            <img
              src="https://www.bk8usd.com/public/promotion/20221101075132-55d1b01f-29bf-41d7-b789-12f4d154ccdc.jpg"
            />
          </a>
          <a class="carousel-img">
            <img
              src="https://www.bk8usd.com/public/promotion/20221031074115-ffcd0773-6eaa-4b3a-b985-75cb8bbfbf27.png"
            />
          </a>
          <a class="carousel-img">
            <img
              src="https://www.bk8usd.com/public/promotion/20221129030415-d72796c7-0a9a-4b57-a6ef-e0be6fa5e0e1.png"
            />
          </a>
        </n-carousel>
      </div>

      <!-- 遊戲大廳 -->
      <div class="gamesHall">
        <div class="titleLine">
          <div class="line">
            <img src="@/assets/images/icon/titleline.svg" />
          </div>
          <p>遊戲大廳</p>
          <div class="line right">
            <img src="@/assets/images/icon/titleline.svg" />
          </div>
        </div>

        <div class="hallCnt">
          <!-- 種類選擇 -->
          <div class="selSort">
            <ul>
              <li :class="{ on: hallSel == 0 }" @click="hallSel = 0">
                <div class="icon live"></div>
                <p>真人</p>
              </li>
              <li :class="{ on: hallSel == 1 }" @click="hallSel = 1">
                <div class="icon sport"></div>
                <p>體育</p>
              </li>
              <li :class="{ on: hallSel == 2 }" @click="hallSel = 2">
                <div class="icon slot"></div>
                <p>電子</p>
              </li>
            </ul>
          </div>

          <!-- 遊戲舞台 -->
          <div class="gameStage">
            <div class="listBox_live" v-if="hallSel == 0">
              <ul>
                <li v-for="(item, index) in hallList.live" :key="index">
                  <router-link :to="item.link">
                    <img :src="getAssetsFile(hallSort,item.imgSrc)">
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="listBox_sport" v-if="hallSel == 1">
              <ul>
                <li v-for="(item, index) in hallList.sport" :key="index">
                  <router-link :to="item.link">
                    <img :src="getAssetsFile(hallSort,item.imgSrc)">
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="listBox_slot" v-if="hallSel == 2">
              <ul>
                <li v-for="(item, index) in hallList.slot" :key="index">
                  <router-link :to="item.link">
                    <img :src="getAssetsFile(hallSort,item.imgSrc)">
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 優質服務 -->
      <div class="quality">
        <div class="titleLine">
          <div class="line">
            <img src="@/assets/images/icon/titleline.svg" />
          </div>
          <p>優質服務</p>
          <div class="line right">
            <img src="@/assets/images/icon/titleline.svg" />
          </div>
        </div>

        <!-- 計數條 -->
        <div class="countBar">
          <div class="item">
            <div class="barCnt">
              60秒
              <div class="leftBar"><span class="line index_01"></span></div>
              <div class="rightBar"><span class="line index_01"></span></div>
            </div>
            <p>平均存款60秒</p>
          </div>
          <div class="item">
            <div class="barCnt">
              80家
              <div class="leftBar"><span class="line index_02"></span></div>
              <div class="rightBar"><span class="line index_02"></span></div>
            </div>
            <p>合作支付平台80家</p>
          </div>
          <div class="item">
            <div class="barCnt">
              5分
              <div class="leftBar"><span class="line index_03"></span></div>
            </div>
            <p>平均提款5分鐘</p>
          </div>
          <div class="item">
            <div class="barCnt">
              22家
              <div class="leftBar"><span class="line index_04"></span></div>
            </div>
            <p>官方合作夥伴22家</p>
          </div>
        </div>

        <div class="list">
          <ul>
            <li>
              <div class="icon">
                <img src="@/assets/images/icon/quality_01.png" />
              </div>
              <div class="depiction">
                <div class="title">極速存提轉款</div>
                <span>FAST TRANSACTION</span>
                <p>存款、取款、轉帳超快速，入帳無延遲。</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/icon/quality_02.png" />
              </div>
              <div class="depiction">
                <div class="title">最完整娛樂體驗</div>
                <span>1000+ GAMES</span>
                <p>HPY88娛樂城擁有最豐富的遊戲種類。</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/icon/quality_03.png" />
              </div>
              <div class="depiction">
                <div class="title">支持所有行動設備</div>
                <span>SUPPORT FOR ALL DEVICES</span>
                <p>不管使用任何設備，娛樂投注隨心所欲！</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/icon/quality_04.png" />
              </div>
              <div class="depiction">
                <div class="title">加密安全管理</div>
                <span>ALWAYS ON PROTECTION</span>
                <p>加密技術，資料保障最完善。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { getHallList } from "@/api/api";
import { ref, reactive, onMounted, watch } from "vue";
import { NCarousel } from "naive-ui";
import AnnBox from "@/components/tool/AnnBox.vue";

const manyNum = ref(4);
const screenW = ref(null);
// 遊戲大廳選擇
const hallSel = ref(0);
const hallList = reactive({ live: "", sport: "", slot: "" });

const hallSort = ref(null)
const setHallList = () => {
  getHallList().then((res) => {
    if (screenW.value > 740) {
      hallList.live = res.max.live;
      hallList.sport = res.max.sport;
      hallList.slot = res.max.slot;
      hallSort.value = 'max';
    } else {
      hallList.live = res.min.live;
      hallList.sport = res.min.sport;
      hallList.slot = res.min.slot;
      hallSort.value = 'min';
    }
  });
};

const getAssetsFile = (sort,url) => {
  return new URL(`/src/assets/images/hallList/${sort}/${url}.webp`, import.meta.url).href;
}


watch(
  () => screenW.value,
  () => {
    if (screenW.value <= 920 && screenW.value > 650) {
      manyNum.value = 3;
    } else if (screenW.value <= 650) {
      manyNum.value = 2;
    } else {
      manyNum.value = 4;
    }
  },
  { deep: true, immediate: true }
);
onMounted(() => {
  screenW.value = document.body.clientWidth;
  window.addEventListener("resize", () => {
    screenW.value = document.body.clientWidth;
    setHallList();
  });

  setHallList();
});
</script>
  
<style lang="scss" scoped>
@import "@/scss/method.scss";
.homeBox {
  background: repeat-y url("@/assets/images/bg/homeCnt.webp");
  @at-root .carousel-img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  @at-root .mainCarousel {
    max-width: 1920px;
    margin: auto;
  }

  @at-root .innerCnt {
    max-width: 1320px;
    margin: auto;
    padding: 10px 10px 50px;

    // 分隔標題
    @at-root .titleLine {
      padding: 30px 30px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      .line {
        max-width: 170px;
        &.right {
          transform: scaleX(-1);
        }
      }
      p {
        padding: 0 30px;
        font-size: 30px;
        letter-spacing: 2px;
        font-weight: bold;
        color: #365a97;
        flex-shrink: 0;
      }
    }

    // 活動輪播
    @at-root .manyCarousel {
      padding-bottom: 50px;
      .carousel-img {
        display: inline-block;
        border-radius: 5px;
        overflow: hidden;
      }
    }

    // 遊戲大廳
    @at-root .gamesHall {
      // 種類選擇
      .selSort {
        ul {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        li {
          padding: 8px 5px;
          max-width: 250px;
          box-shadow: 0 3px 4px #0a10204d;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
          @include hover {
            &:hover {
              background: linear-gradient(-180deg, #a1effb, #6eccff, #4295f6);
              .icon {
                background-size: cover;
                &.sport {
                  background-image: url("@/assets/images/icon/sport_on.png");
                }
                &.live {
                  background-image: url("@/assets/images/icon/live_on.png");
                }
                &.slot {
                  background-image: url("@/assets/images/icon/slot_on.png");
                }
              }
              p {
                color: #fff;
              }
            }
          }
          &.on {
            background: linear-gradient(-180deg, #a1effb, #6eccff, #4295f6);
            .icon {
              background-size: cover;
              &.sport {
                background-image: url("@/assets/images/icon/sport_on.png");
              }
              &.live {
                background-image: url("@/assets/images/icon/live_on.png");
              }
              &.slot {
                background-image: url("@/assets/images/icon/slot_on.png");
              }
            }
            p {
              color: #fff;
            }
          }
        }
        .icon {
          width: 36px;
          height: 36px;
          margin-right: 8px;
          background: no-repeat center / 28px 28px;
          flex-shrink: 0;
          &.sport {
            background-image: url("@/assets/images/icon/sport_off.png");
          }
          &.live {
            background-image: url("@/assets/images/icon/live_off.png");
          }
          &.slot {
            background-image: url("@/assets/images/icon/slot_off.png");
          }
        }
        p {
          font-size: 18px;
          font-weight: bold;
          color: #717171;
        }
      }
      // 遊戲舞台
      .gameStage {
        padding: 20px 0 140px;
        position: relative;
        background: no-repeat url(@/assets/images/bg/gamesHall.webp) center
          bottom / 100% auto;
      }
      .listBox_sport,
      .listBox_live {
        padding: 0 20px;
        ul {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        li {
          width: calc(100% / 4);
          cursor: pointer;
          display: flex;
          justify-content: center;
          img {
            max-width: 250px;
          }
        }
      }
      .listBox_slot {
        max-width: 720px;
        margin: auto;
        ul {
          display: flex;
          flex-wrap: wrap;
        }
        li {
          width: calc(100% / 4);
          max-width: 180px;
          padding-top: 25px;
          cursor: pointer;
        }
      }
    }

    // 優質服務
    @at-root .quality {
      // 計數條
      .countBar {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-around;
        color: #4da8ff;
        .item {
          position: relative;
        }
        .barCnt {
          width: 150px;
          height: 150px;
          margin-bottom: 5px;
          background-image: url("@/assets/images/bg/countBar.webp");
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: bold;
          position: relative;
          .leftBar,
          .rightBar {
            width: 60px;
            height: 120px;
            margin: auto;
            overflow: hidden;
            position: absolute;
            .line {
              width: 100%;
              height: 100%;
              margin: auto;
              border: 12px solid #4da8ff;
              position: absolute;
              top: 0;
            }
          }
          .leftBar {
            @include pos(tbl, 0, 0, 15px);
            .line {
              border-radius: 120px 0 0 120px;
              border-right-color: transparent;
              transform-origin: center right;
              transform: rotate(calc(180 / 100 * -100deg));
              &.index_01 {
                @include countBar("index_01_L", 0.8s, 0s, 0);
              }
              &.index_02 {
                @include countBar("index_02_L", 0.8s, 0s, 0);
              }
              &.index_03 {
                @include countBar("index_03_L", 0.3s, 0s, -80);
              }
              &.index_04 {
                @include countBar("index_04_L", 0.6s, 0s, -50);
              }
            }
          }
          .rightBar {
            @include pos(tbr, 0, 0, 15px);
            .line {
              border-radius: 0 120px 120px 0;
              border-left-color: transparent;
              transform-origin: center left;
              transform: rotate(calc(180 / 100 * -100deg));
              &.index_01 {
                @include countBar("index_01_R", 0.15s, 0.8s, -90);
              }
              &.index_02 {
                @include countBar("index_02_R", 0.7s, 0.8s, -30);
              }
            }
          }
        }
        p {
          font-weight: bold;
          text-align: center;
          color: #365a97;
        }
      }
      .list {
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        li {
          width: calc(50% - 20px);
          padding: 10px 20px;
          display: flex;
          align-items: center;
          border: 2px solid #fff;
          box-shadow: 0 0 6px #637ec3;
          border-radius: 8px;
          background: linear-gradient(180deg, #edf6ff, #fff 53.65%, #f0f7ff);
        }
        .icon {
          width: 75px;
          margin-right: 20px;
        }
        .depiction {
          font-size: 15px;
          .title {
            color: #365a97;
            font-size: 18px;
            font-weight: bold;
          }
          span {
            color: #999;
            font-size: 13px;
          }
          p {
            color: #333;
            line-height: 20px;
          }
        }
      }
    }
  }
}

// ====== rwd =====
@include rwd(1320) {
  .gamesHall {
    .gameStage {
      padding: 20px 0 10vw;
    }
  }
}

@include rwd(920) {
  .gamesHall {
    .listBox_sport,
    .listBox_live {
      ul {
        flex-wrap: wrap;
      }
      li {
        width: calc(100% / 2 - 10px);
      }
    }
  }
}

@include rwd(740) {
  .gamesHall{
    padding-bottom: 10vw;
    .hallCnt{
      display: flex;
    }
    .selSort{
      margin-right: 10px;
      ul{
        flex-direction: column;
      }
      li{
        min-width: 100px;
      }
    }
    .gameStage{
      padding: 0;
      background: unset;
    }
    .listBox_live{
      padding: 0;
      li{
        a{
          width: 100%;
        }
        img{
          max-width: unset;
          filter: drop-shadow(2px 2px 4px #060a164d);
        }
      }
    }
    .listBox_sport{
      padding: 0;
      li{
        width: 100%;
        img{
          max-width: 100%;
          filter: drop-shadow(2px 2px 4px #060a164d);
        }
      }
    }
    .listBox_slot{
      ul{
        gap: 10px;
      }
      li{
        width: calc(100% / 2 - 5px);
        max-width: unset;
        padding-top: 0;
        img{
          filter: drop-shadow(2px 2px 4px #060a164d);
        }
      }
    }
  }
  .quality{
    .countBar{
      flex-wrap: wrap;
      .item{
        width: calc(100% / 2);
      }
      .barCnt{
        margin: auto;
      }
    }
  }
}

@include rwd(700){
  .titleLine{
    padding: 2vw 30px;
    p{
      font-size: 4.5vw;
      padding: 0 4vw;
    }
  }
  .manyCarousel{
    padding-bottom: 8vw;
  }

  .quality{
    .list{
      ul{
        gap: 10px;
      }
      li{
        width: 100%;
      }
    }
  }
} 
</style>

  
