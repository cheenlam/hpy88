<template>
  <!-- annBox start -->
  <div class="annBox">
    <div class="inner">
      <div class="annCnt">
        <!-- 喇叭標題 -->
        <div class="horn">
          <div class="icon"></div>
          <span>公告</span>
        </div>
        <!-- 跑馬燈主體 -->
        <div class="marquee_body">
          <Marquee
            v-if="marquee.length !== 0"
            :stringArray="marquee"
            gap="35px"
            :waitTime="1000"
            @renewList = "renewList"
          ></Marquee>
        </div>
        <!-- 現在日期與時間 -->
        <div class="anntime">
          <p>{{ nowDay }}</p>
          <p>{{ nowTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { apiGetActivityData, apiGetAnnouncementData } from "@/api/api";
import { timeFormate } from "@/utils/timeFormate";
import { onMounted, ref, onUnmounted } from "vue";
import Marquee from "@/components/tool/Marquee.vue";

// ==== 跑馬燈 & 時間 ====
const marquee = ref([]);
const nowTime = ref("");
const nowDay = ref("");
const nowTimer = ref(null);
// const marqueeTimer = ref(null);

// 跑馬燈
const marqueeStart = async () => {
  marquee.value = [];
  await apiGetActivityData()
    .then((res) => {
      if (res.code === 200) {
        const data = res.data.list;
        data.forEach((item) => {
          item.style = 0;
          item.styleTxt = "优惠活动";
          marquee.value.push(item);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });

  await apiGetAnnouncementData()
    .then((res) => {
      if (res.code === 200) {
        const data = res.data.list;
        data.forEach((item) => {
          item.style = 1;
          item.styleTxt = "公告";
          marquee.value.push(item);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  marquee.value = [...new Set(marquee.value)];
};

// 定時器函數
const nowTimes = () => {
  nowTime.value = timeFormate(new Date()).nowTime;
  nowDay.value = timeFormate(new Date()).nowDay;

  nowTimer.value = setInterval(() => {
    nowTime.value = timeFormate(new Date()).nowTime;
    nowDay.value = timeFormate(new Date()).nowDay;
  }, 1000);

  // marqueeTimer.value = setInterval(() => {
  //   marqueeStart();
  // }, 1000 * 60 * 5);
};

const renewList = () => {
  marqueeStart();
}

const init = onMounted(async () => {
  nowTimes();
  await marqueeStart();
});

// 移除定時器
onUnmounted(() => {
  clearInterval(nowTimer.value);
  // clearInterval(marqueeTimer.value);
  nowTimer.value = null;
  // marqueeTimer.value = null;
});
</script>

<style lang="scss" scoped>
@import "@/scss/method.scss";
.annBox {
  background-color: #eef2fc;
  .inner {
    width: 100%;
    height: 45px;
    max-width: 1320px;
    padding: 0 10px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    @include rwd(600) {
      height: auto;
      padding: 3px 10px;
    }
  }
  .annCnt {
    width: 100%;
    padding: 0 5px;
    display: flex;
    align-items: center;
    // 喇叭標題
    @at-root .horn {
      padding-right: 8px;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      .icon {
        width: 26px;
        height: 26px;
        background: url("@/assets/images/icon/horn.png") no-repeat center / cover;
        flex-shrink: 0;
        @include rwd(600) {
          width: 22px;
          height: 22px;
        }
      }
      span {
        padding: 0 3px;
        font-weight: bold;
        color: #327ec4;
      }
    }
    // 跑馬燈主體
    @at-root .marquee_body {
      width: 100%;
      height: 100%;
      line-height: 1;
      position: relative;
      overflow: hidden;
      color: #555;

      div {
        height: 100%;
        white-space: nowrap;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 13px;
        margin-right: 25px;
        font-family: Open Sans, KhmerOS, Tahoma, Arial, Helvetica, sans-serif;
      }
    }
    // 現在日期與時間
    @at-root .anntime {
      padding-left: 30px;
      font-size: 12px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      @include rwd(600) {
        display: none;
      }
    }
  }
}
</style>
