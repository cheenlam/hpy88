<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "@/scss/reset.scss";

body {
  width: 100%;
  padding-left: constant(safe-area-inset-left);
  padding-left: env(safe-area-inset-left);
  padding-right: constant(safe-area-inset-right);
  padding-right: env(safe-area-inset-right);
}
*{
  font-family: 'Noto Sans', 'Noto Sans TC', 'Noto Sans SC', sans-serif;
}
</style>
