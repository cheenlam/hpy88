<template>
  <div class="rotatePhone" v-if="rotateSw">
    <div class="icon"></div>
    <p>请将您的手机转为直向</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: [],emits: [],
  setup(props, { emit }) {
    const rotateSw = ref(false);
    const ckDirection = () => {
      rotateSw.value = window.orientation != 0 ? true : false;
    };

    onMounted(() => {
      ckDirection();

      window.addEventListener("orientationchange", () => {
        ckDirection();
      });
      window.addEventListener("resize", () => {
        ckDirection();
      });
    });

    return {
      rotateSw,
      ckDirection,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/method.scss";
@import "@/scss/shared.scss";

.rotatePhone {
  width: 100vw;
  height: 100vh;
  @include map-get(background-color, $oddsCont, live, 09);
  position: fixed;
  @include pos(tl, 0);
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  display: none;
  @include phone {
    display: flex;
  }
  .icon{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    background: no-repeat url(@/assets/images/rotatePhone.gif) center / cover;
  }
}

</style>
