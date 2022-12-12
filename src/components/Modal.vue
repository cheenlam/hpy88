<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpen: Boolean,
  isDisabled: Boolean,
});

const emit = defineEmits(["close", "confirm"]);

const handleCancel = () => {
  emit("close", false);
};

const handleConfirm = () => {
  emit("confirm", false);
};
</script>

<template>
  <transition name="modalOverlay" appear>
    <div
      class="modal-overlay"
      v-if="isOpen"
      @click.prevent="handleCancel"
    ></div>
  </transition>

  <transition name="Modal" appear>
    <div class="dialog" v-if="isOpen">
      <slot name="DialogTitle"> </slot>
      <slot name="DialogMain"> </slot>

      <slot name="DialogFooter">
        <div class="dialog_Btn">
          <button @click.prevent="handleCancel">取消</button>
          <button
            :class="[isDisabled ? 'isDisabled' : '']"
            @click.prevent="handleConfirm"
            :disabled="isDisabled"
          >
            确定
          </button>
        </div>
      </slot>
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
      box-shadow: 0 2px #e83200;
      border: 1px solid #ff6600;
      background: linear-gradient(to bottom, #f5995c 0, #ff6600 50%);
    }
    button:nth-child(2).isDisabled {
      color: #fff;
      box-shadow: 0 2px #767676;
      border: 1px solid #9d9d9d;
      background: linear-gradient(to bottom, #c4bfbf 0, #8b8b8b 50%);
      cursor: default;
    }
  }

  // 帳戶資訊
  .userMsg_cnt {
    padding: 15px 8px 30px;
    width: 100%;
    font-size: 14px;
    color: #333;
    ul {
      padding: 5px 5px;
      border-radius: 3px;
      border: 1px solid #e5e5e5;
      & + ul {
        margin-top: 5px;
      }

      li {
        padding: 3px 8px;
        display: flex;
        justify-content: space-between;
        & + li {
          border-top: 1px dotted #e5e5e5;
        }
      }
      span {
        font-weight: bold;
      }
      p {
        color: #888;
      }
    }
  }

  // 用戶登入
  .login_cnt {
    width: 100%;
    padding: 30px 20px;
    font-size: 16px;
    color: #333;
    label {
      padding: 8px 10px 0;
      position: relative;
      display: flex;
      align-items: center;
      overflow: hidden;
      & + label {
        margin-top: 10px;
      }
      &::before {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #e5e5e5;
        position: absolute;
        @include pos(bl, 0);
      }
      span {
        height: 40px;
        line-height: 40px;
        margin: auto;
        font-weight: 700;
        letter-spacing: 1px;
        position: absolute;
        @include pos(bl, 0, 10px);
        transition: 0.5s;
      }
      input {
        @include fullNone;
        width: calc(100% - 45px);
        height: 40px;
        margin-left: auto;
        font-size: 15px;
        transition: 0.5s;
        &:-webkit-autofill {
          box-shadow: 0 0 0 40px #fff inset;
          -webkit-text-fill-color: #999;
        }
        &:focus {
          width: calc(100% - 10px);
          & ~ span {
            transform: translateY(-20px);
            font-size: 12px;
            color: #ff6600;
          }
          & ~ .line {
            display: block;
          }
        }
      }
      .line {
        width: 100%;
        height: 2px;
        background: linear-gradient(
          90deg,
          #ffd6b1,
          #ffc18c,
          #ffad66,
          #fa993e,
          #ff6600
        );
        position: absolute;
        @include pos(bl, 0);
        animation: lineMove 1.5s linear infinite;
        display: none;
      }
    }
    .errorMsg {
      width: 100%;
      height: 25px;
      padding: 5px 0 0 10px;
      font-size: 12px;
      color: #f00;
      text-align: left;
    }
  }

  // 警示icon
  .warningTitle{
    width: 100%;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    .icon{
      width: 70px;
    }
  }  
  .warningTxt{
    padding: 10px 10px 40px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fd8b5c;
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
