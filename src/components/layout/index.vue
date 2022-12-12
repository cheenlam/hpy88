<template>
    <Header></Header>
    <router-view  :style="{minHeight : footH}"></router-view>
    <Footer @reFootH = "getFootH"></Footer>
    <div class="aaa" @click="goTop()"></div>
</template>
   
<script setup>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { ref ,onMounted } from "vue";

const footH = ref(null);
const getFootH = (val) => {
    let winH = document.body.clientHeight;
    footH.value  = `${winH - val - 60}px`
};

// 滾動置頂
const goTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

onMounted(() => {});
</script>

<style>
    .aaa{
        width: 80px;
        height: 80px;
        background-color: #000;
        border-radius: 50%;
        position: fixed;
        bottom: 10px;
        right: 10px;
    }

</style>


   