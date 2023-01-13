<template>
  <div class="outBox" ref="outBox" v-if="!reFresh">
    <div
      class="textBox"
      ref="box"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
    >
    <router-link to="/Anns">
      <span
        ref="marqueeRefs"
        v-for="(item, index) in stringArray"
        :key="index"
        :style="{
          paddingRight: gap,
        }"
        ><span class="marqueeSort" :class="{'isGames' : item.style == 1}">{{ item.styleTxt }}</span> [{{
          item.time_start
        }}] {{ item.title }}</span
      >
    </router-link>
    </div>
  </div>
</template>
<script>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
export default {
  emits: ["renewList"],
  props: {
    // 傳遞過來的字串陣列
    stringArray: {
      type: Array,
      default: [],
    },
    // 撥放速度
    interval: {
      type: Number,
      default: 50,
    },
    // 每次移動得像素,數值太大會導致很卡的視覺效果
    movePx: {
      type: Number,
      default: 1,
    },
    // 兩個元素之間的間距
    gap: {
      type: String,
      default: "10px",
    },
    // 每次元素停留显示的时间 每次元素停留顯示的時間
    waitTime: {
      type: Number,
      default: 0,
    },
    // 是否滑鼠放上後停止移動
    isHoverStop: {
      type: Boolean,
      default: true,
    },
  },
  setup(props,{ emit }) {
    const isScrolling = ref(true);
    const timer = ref(null);
    const outBox = ref(null);
    const marqueeRefs = ref(null);
    const box = ref(null);
    const x = ref(0);
    const index = ref(0);
    const childWidth = ref(0);
    const reFresh = ref(false);

    const renderDom = () => {
      const outWidth = outBox.value.offsetWidth;
      // 設置起始撥放的位置 父組件的最右側出現
      const startX = outWidth;
      box.value.style.transform = `translateX(${startX}px)`;
      x.value = startX;
      // 取得第一個子元素的寬度
      childWidth.value = [...marqueeRefs.value][index.value].offsetWidth;
      // 取得子元素的總寬度
      timer.value = setInterval(() => {
        if (!isScrolling.value) return;

        if (!box.value) return;

        const childNodes = [...marqueeRefs.value];
        const totalChildWidth = childNodes.reduce(
          (pre, cur) => pre + cur.offsetWidth,
          0
        );
        box.value.style.transform = `translateX(${x.value}px)`;
        x.value -= props.movePx;
        if (-x.value >= totalChildWidth) {
          emit("renewList", true);

          // 撥放完之後就開始重新撥放
          x.value = startX;
          index.value = 0;
          childWidth.value = childNodes[index.value].offsetWidth;
          return;
        }

        if (-x.value >= childWidth.value && props.waitTime) {
          // 如果過了第index個元素 開始等待
          index.value++;
          childWidth.value += childNodes[index.value].offsetWidth;
          isScrolling.value = false;
          setTimeout(() => {
            isScrolling.value = true;
          }, props.waitTime);
        }
      }, props.interval);
    };

    // 滑鼠移入觸發
    const mouseenter = () => {
      if (!props.isHoverStop) return;
      isScrolling.value = false;
    };

    // 滑鼠離開觸發
    const mouseleave = () => {
      isScrolling.value = true;
    };

    onMounted(() => {
      nextTick(() => {
        renderDom();
      });
    });

    onBeforeUnmount(() => {
      // 組件銷毀時 清除定時器
      clearInterval(timer.value);
    });

    return {
      timer,
      isScrolling,
      outBox,
      box,
      x,
      index,
      childWidth,
      reFresh,
      mouseenter,
      mouseleave,
      marqueeRefs,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/method.scss";
@import "@/scss/shared.scss";
.outBox {
  width: 100%;
  overflow: hidden;
  .textBox {
    white-space: nowrap;
  }

  .marqueeSort {
    padding: 5px 8px;
    @include map-get("background-color", $oddsCont, live, 08);
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    &.isGames{
      @include map-get("background-color", $oddsCont, generally, 09);
    }
  }
}
</style>
