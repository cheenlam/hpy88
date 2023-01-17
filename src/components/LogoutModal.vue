<script setup>
import { ref } from "vue";
import { removeToken } from '@/utils/cookies'

const props = defineProps({
  isOpen: Boolean,
  isDisabled: Boolean,
});

const emit = defineEmits(["confirm"]);

const handleConfirm = () => {
  removeToken()
  emit("confirm", false);
  window.opener = null;
  window.open("", "_self");
  window.close();
};
</script>

<template>
  <transition name="modalOverlay" appear>
    <div class="modal-overlay" v-if="isOpen"></div>
  </transition>

  <transition name="Modal" appear>
    <div class="dialog" v-if="isOpen">
      <div class="warningTitle">
        <div class="icon">
          <img src="@/assets/images/icon/error.svg" />
        </div>
      </div>
      <div class="warningTxt">发生错误请尝试重新登入</div>
      <div class="dialog_Btn">
        <button @click.prevent="handleConfirm">取消</button>
        <button
          :class="[isDisabled ? 'isDisabled' : '']"
          @click.prevent="handleConfirm"
          :disabled="isDisabled"
        >
          确定
        </button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import "@/scss/method.scss";
@import "@/scss/shared.scss";
.dialog {
  width: calc(100% - 20px);
  max-width: 320px;
  height: fit-content;
  margin: auto;
  padding: 0 0 10px;
  position: fixed;
  @include pos(tbrl, 0);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  overflow: hidden;
  z-index: 200;

  // 彈窗標題
  .dialog_title {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    @include map-get(background-color, $oddsCont, live, 09);
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 0 2px 4px #cf3206;
  }
  // 下方按鈕列
  .dialog_Btn {
    width: 100%;
    padding: 0 10px;
    display: flex;
    button {
      @include fullNone;
      height: 35px;
      font-size: 14px;
      cursor: pointer;
      color: #fff;
      box-shadow: 0 2px #767676;
      border: 1px solid #9d9d9d;
      background: linear-gradient(to bottom, #c4bfbf 0, #8b8b8b 50%);
      border-radius: 3px;
      flex: 1;
      & + button {
        margin-left: 10px;
      }
    }

    button:nth-child(2) {
      color: #fff;
      box-shadow: 0 2px #0f3b86;
      border: 1px solid #366ac4;
      background: linear-gradient(to bottom, #a2ccff 0, #366ac4 50%);
    }
    button:nth-child(2).isDisabled {
      color: #fff;
      box-shadow: 0 2px #767676;
      border: 1px solid #9d9d9d;
      background: linear-gradient(to bottom, #c4bfbf 0, #8b8b8b 50%);
      cursor: default;
    }
  }

  // 警示icon
  .warningTitle {
    width: 100%;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    .icon {
      width: 70px;
    }
  }
  .warningTxt {
    padding: 10px 10px 40px;
    font-weight: bold;
    letter-spacing: 1px;
    @include map-get(color, $colorStyle, blue, 07);
    font-size: 18px;
    text-align: center;
    line-height: 24px;
  }
}

@keyframes lineMove {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8);
}

.modalOverlay-enter-active,
.modalOverlay-leave-active {
  transition: opacity 0.4s linear;
}

.modalOverlay-enter-from,
.modalOverlay-leave-to {
  opacity: 0;
}

.modalOverlay-enter-to,
.modalOverlay-leave-from {
  opacity: 1;
}

.Modal-enter-active,
.Modal-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.Modal-enter-from,
.Modal-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

.Modal-enter-to,
.Modal-leave-from {
  opacity: 1;
}
</style>
