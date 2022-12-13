<template>
  <div class="timerBox">
    <div class="latDay"><p>{{timeVal.day}}</p></div>
    <div class="latTime">
      <ul>
        <li><p>{{timeVal.hour}}</p></li>
        <li><p>{{timeVal.min}}</p></li>
        <li><p>{{timeVal.sec}}</p></li>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
const props = defineProps({letTime:''})

const timer = ref(null);
// const letTime = ref("2022-12-30 22:00");
const timeVal = reactive({
    day:'', hour:'', min:'' ,sec:''
})

const setTimeShow = () => {
  const countDownTime = new Date(props.letTime);
  const timeNow = new Date();
  const remain = countDownTime - timeNow;
  timeVal.sec = String(Math.floor(remain / 1000) % 60).padStart(2,'0');
  timeVal.min = String(Math.floor(remain / 1000 / 60) % 60).padStart(2,'0');
  timeVal.hour = String(Math.floor(remain / 1000 / 60 / 60) % 24).padStart(2,'0');
  timeVal.day = Math.floor(remain / 1000 / 60 / 60 / 24);
} 

onMounted(() => {
    setTimeShow();
    timer.value = setInterval(setTimeShow, 1000);
});

// 清除計時器
onBeforeUnmount(() => {
   clearInterval(timer.value);
});


</script>
<style lang="scss" scoped>
@import "@/scss/method.scss";
.timerBox {
  display: flex;
  align-items: center;
  color: #6897e9;
  p {
    min-width: 35px;
    height: 25px;
    padding: 0 8px;
    line-height: 25px;
    color: #fff;
    border-radius: 3px;
    background: linear-gradient(180deg, #57d7ff, #3f6fc2 70%, #95e6ff);
    text-align: center;
  }
  @at-root .latDay {
    margin-right: 10px;
  }
  @at-root .latTime {
    ul {
      display: flex;
      align-items: center;
    }
    li {
      display: flex;
      align-items: center;
    }
    li + li {
      &::before {
        content: ":";
        padding: 0 2px;
        font-weight: bold;
      }
    }
  }
}
</style>