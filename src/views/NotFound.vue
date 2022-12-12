<template>
  <div class="formBox">
    <div class="formTitle">ERROR</div>
    <div class="inner">
      <div class="formBody">
        <p>Oops!</p>
        <span>404 Not Found</span>

        <button type="button" class="btn" @click="goHome">返回首頁</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router/index'
import { nextTick } from '@vue/runtime-core';

const goHome = () => {
    router.push({ path: '/' })
    nextTick()
}

</script>

<style lang="scss" scoped>
@import "@/scss/method.scss";

.formBox {
  width: 100%;
  max-width: 1250px;
  height: 100vh;
  padding: 15px 10px;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;

  .formTitle {
    background: #ff6600;
    flex-shrink: 0;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    color: #fff;
    font-size: 22px;
    font-weight: 800;
  }

  .inner {
    margin: 3px 0 0;
    height: calc(100%);
    padding: 20px 10px;
    font-size: 14px;
    background-color: #fff;

    .formBody {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      height: 100%;
      padding-bottom: 80px;
      color: #b91c1c;
      user-select: none;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      p {
        font-size: 96px;
        font-weight: 800;
        letter-spacing: 0.025em;
      }
      span {
        font-size: 60px;
        letter-spacing: 0.05em;
      }
      .btn {
        height: 35px;
        padding: 0 20px;
        @include fullNone;
        background-color: #ff6600;
        box-shadow: 0 -2px 2px #a12503 inset;
        color: #fff;
        border-radius: 3px;
        letter-spacing: 1px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        opacity: 0.8;
        transition: 0.3s;
        @include hover {
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
  // ====== RWD設置 ======
  @include rwd(500) {
    .inner {
      .formBody {
        p {
          font-size: 60px;
        }
        span {
          font-size: 48px;
        }
      }
    }
  }

  @include rwd(400) {
    .inner {
      .formBody {
        p {
          font-size: 48px;
        }
        span {
          font-size: 36px;
        }
      }
    }
  }

  @include phone {
    .inner {
      .formBody {
        padding-bottom: calc(160px + constant(safe-area-inset-bottom));
        padding-bottom: calc(160px + env(safe-area-inset-bottom));
      }
    }
  }
}
</style>
