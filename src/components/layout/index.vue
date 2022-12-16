<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
 
  <div class="goTop" @click="goTop()">
    <img src="@/assets/images/icon/anglesUp_w.svg" alt="anglesUp" />
  </div>
</template>
   
<script setup>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { ref, onMounted } from "vue";

// 滾動置頂
const goTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {});
</script>

<style lang="scss" scoped>
@import "@/scss/method.scss";
.goTop {
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  background: linear-gradient(180deg, #22a7fb, #6dc5fc);
  box-shadow: 0 0 8px #063755;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  @include pos(br, 15%, 1%);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }
}
</style>


   