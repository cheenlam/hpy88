<template>
  <div class="timerBox">
    <div class="lastDay">
        <p>{{timeVal.day < 0 ? '0' : timeVal.day}}</p>
        <span>Day</span>
    </div>
    <div class="lastTime">
      <ul>
        <li><p>{{timeVal.hour < 0 ? '00' : timeVal.hour}}</p></li>
        <li><p>{{timeVal.min < 0 ? '00' : timeVal.min}}</p></li>
        <li><p>{{timeVal.sec < 0 ? '00' : timeVal.sec}}</p></li>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
const props = defineProps({lastTime:''})

const timer = ref(null);
const timeVal = reactive({
    day:'', hour:'', min:'' ,sec:''
})

const setTimeShow = () => {
  const countDownTime = new Date(props.lastTime);
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
  p {
    min-width: 35px;
    height: 25px;
    padding: 0 8px;
    line-height: 27px;
    color: #fff;
    border-radius: 3px;
    background: linear-gradient(180deg, #57d7ff, #3f6fc2 70%, #95e6ff);
    text-align: center;
    font-weight: bold;
  }
  @at-root .lastDay {
    display: flex;
    align-items: center; 
    p{  
        background: linear-gradient(180deg, #faf0ae, #e2bf5f 70% ,#faf3c3);
        color: #555;
    }
    span{
        padding: 0 8px 0 3px;
        color: #999;
        font-size: 12px;
    }
  }
  @at-root .lastTime {
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
        color: #6897e9;
      }
    }
  }
}
</style>