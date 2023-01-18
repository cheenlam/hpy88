<template>
  <div class="activityBox">
    <div class="topBanner">
      <img src="@/assets/images/bg/activity_top.webp" />
      <div class="mask">
        <p>优惠活动</p>
      </div>
    </div>
    <div class="activityList">
      <ul>
        <li>
          <div class="banner">
            <img
              src="https://www.bk8usd.com/public/promotion/20221129030415-d72796c7-0a9a-4b57-a6ef-e0be6fa5e0e1.png"
            />
          </div>
          <div class="msg">
            <Timer lastTime="2023-06-04 00:00"></Timer>
            <div class="title">TURNAMEN JUMLAH TARUHAN PIALA DUNIA 2022</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              illo nulla asperiores eum officiis accusamus vero hic cumque,
              repellat quaerat recusandae quis qui facere quam error odio beatae
              ad alias.
            </p>
          </div>
        </li>
        <li>
          <div class="banner">
            <img
              src="https://www.bk8usd.com/public/promotion/20221109071642-8958a11f-0c67-4ed5-a84b-c634ba763244.png"
            />
          </div>
          <div class="msg">
            <Timer lastTime="2023-02-26 00:00"></Timer>
            <div class="title">TURNAMEN JUMLAH TARUHAN PIALA DUNIA 2022</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              illo nulla asperiores eum officiis accusamus vero hic cumque,
              repellat quaerat recusandae quis qui facere quam error odio beatae
              ad alias.
            </p>
          </div>
        </li>
        <li>
          <div class="banner">
            <img
              src="https://www.bk8usd.com/public/promotion/20221031074115-ffcd0773-6eaa-4b3a-b985-75cb8bbfbf27.png"
            />
          </div>
          <div class="msg">
            <Timer lastTime="2030-02-30 00:00"></Timer>
            <div class="title">TURNAMEN JUMLAH TARUHAN PIALA DUNIA 2022</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              illo nulla asperiores eum officiis accusamus vero hic cumque,
              repellat quaerat recusandae quis qui facere quam error odio beatae
              ad alias.
            </p>
          </div>
        </li>
        <li>
          <div class="banner">
            <img
              src="https://www.bk8usd.com/public/promotion/20221026200507-fcd9e3a6-fbaa-4e5c-a393-9c59697d1605.png"
            />
          </div>
          <div class="msg">
            <Timer lastTime="2024-09-12 22:00"></Timer>
            <div class="title">TURNAMEN JUMLAH TARUHAN PIALA DUNIA 2022</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              illo nulla asperiores eum officiis accusamus vero hic cumque,
              repellat quaerat recusandae quis qui facere quam error odio beatae
              ad alias.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
import Timer from "@/components/tool/Timer.vue";
</script>

<style lang="scss" scoped>
@import "@/scss/method.scss";
.activityBox {
  padding-bottom: 50px;
  .topBanner {
    max-width: 1320px;
    margin: auto;
    position: relative;
    .mask {
      background-color: rgba(255, 255, 255, .2);
      width: 100%;
      height: 100%;
      position: absolute;
      @include pos(tl, 0);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      width: 100%;
      font-size: 80px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.9);
      text-align: center;
      text-shadow: 1px 1px 2px #2354a8;
      @include rwd(1320) {
        font-size: 6vw;
      }
    }
  }

  @at-root .activityList {
    max-width: 1320px;
    margin: auto;
    padding: 0 10px 50px;
    li {
      padding: 15px 0;
      display: flex;
      font-size: 14px;
      & + li {
        border-top: 1px solid #e0e0e0;
      }
    }
    .banner {
      border-radius: 5px;
      overflow: hidden;
      min-width: 300px;
      flex: 1;
    }
    .msg {
      height: auto;
      padding: 0 10px;
      flex: 2;
      color: #333;
      .title {
        margin: 5px 0 8px;
        font-weight: bold;
        color: #365a97;
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
}

// ====== rwd ====
@include rwd(700) {
  .activityList {
    li {
      flex-direction: column;
    }
    .banner {
      margin-bottom: 8px;
    }
    .msg {
      padding: 0;
    }
  }
}
</style>
  
  
  
  