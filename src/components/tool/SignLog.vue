<template>
  <div class="signBody">
    <div class="closeBg" @click="closeSw"></div>
    <div class="innerCnt">
      <div class="leftBg"></div>
      <div class="signCnt">
        <div class="closeBtn" @click="closeSw"></div>

        <!-- 登入 -->
        <template v-if="signNum == 0">
          <div class="sortTitle">登入</div>
          <div class="iptBox">
            <form> 
              <!-- 登入 (帳號) -->
              <label>
                <input
                type="text"
                placeholder="请填写4位数以上英数字帐户名称"
                onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9]/g,'')"
                autocomplete="false"
                v-model="regVal.account"
                @keyup="ckregVal()"
              />
              <p class="errorTxt" v-if="regVal.errorSw">该帐户已经注册</p>
              </label>
              <!-- 登入 (密碼) -->
              <label>
                <input
                type="password"
                placeholder="请填写5位数以上英数字账户密码"
                onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9]/g,'')"
                autocomplete="new-password"
                v-model="regVal.pwd"
                @keyup="ckregVal()"
              />
              </label>
            </form>
          </div>
          <div class="jumpSort" @click="signNum = 2">忘记密码</div>

          <div class="btnBox">
            <button>登入账户</button>
            <p>
              您是HPY88的新用戶？<span class="jumpSort" @click="signNum = 1"
                >创建账户</span
              >
            </p>
          </div>
        </template>

        <!-- 註冊 -->
        <template v-if="signNum == 1">
          <div class="sortTitle">注册</div>
          <form v-on:submit.prevent>
            <div class="iptBox">
              <!-- 註冊 (帳號) -->
              <label>
                <input
                type="text"
                placeholder="请填写4位数以上英数字帐户名称"
                onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9]/g,'')"
                autocomplete="false"
                v-model="regVal.account"
                @keyup="ckregVal()"
              />
              <p class="errorTxt" v-if="regVal.errorSw">该帐户已经注册</p>
              </label>
              <!-- 註冊 (密碼) -->
              <label>
                <input
                type="password"
                placeholder="请填写5位数以上英数字账户密码"
                onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9]/g,'')"
                autocomplete="new-password"
                v-model="regVal.pwd"
                @keyup="ckregVal()"
              />
              </label>
              <!-- 註冊 (信箱) -->
              <label>
                <input
                type="email"
                placeholder="請填寫您的信箱"
                v-model="regVal.email"
                @keyup="ckregVal()"
              />
              </label>
              <!-- 註冊 (暱稱) -->
              <label>
                <input
                type="text"
                placeholder="請填寫您的暱稱"
                v-model="regVal.name"
                @keyup="ckregVal()"
              />
              </label>   
            </div>

            <label class="ckBox">
              <input type="checkbox" 
                      v-model="regVal.checked"
                     @change="ckregVal()"
              />
              <p>我同意用户协议并确认我至少18岁</p>
            </label>

            <div class="btnBox">
              <button @click="regMember()" :disabled="regVal.disabled">创建账户</button>
              <p>
                已有帐户？<span class="jumpSort" @click="signNum = 0"
                  >登入账户</span
                >
              </p>
            </div>
          </form>
        </template>

        <!-- 忘記密碼 -->
        <template v-if="signNum == 2">
          <div class="sortTitle">忘记密码</div>
          <div class="iptBox">
            <form>
              <!-- 忘記密碼(帳號) -->
              <label>
                <input
                type="text"
                placeholder="请输入用户帐号"
                onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9]/g,'')"
                autocomplete="false"
                v-model="regVal.account"
                @keyup="ckregVal()"
              />
              <p class="errorTxt" v-if="regVal.errorSw">该帐户已经注册</p>
              </label>
            </form>
          </div>
          <div class="btnBox">
            <button>重设密码</button>
            <p>
              已有帐户？<span class="jumpSort" @click="signNum = 0"
                >登入账户</span
              >
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
  
  
  
<script setup>
import { apiMemberAdd } from "@/api/api";
import { onMounted, ref, reactive } from "vue";
const emit = defineEmits(["closeSign"]);
const props = defineProps({ signNum: Number });

const signNum = ref(0);
// 關閉彈窗
const closeSw = () => {
  emit("closeSign", true);
};

// 註冊帳戶
const regVal = reactive({
  account: "",
  pwd: "",
  email:'',
  name: "",
  checked:false,
  disabled:true,
  errorSw:false
});


// 確認註冊輸入
const ckregVal = () => {
  regVal.errorSw = false;
  
  if(regVal.account.length >= 4 && regVal.pwd.length >= 5 && regVal.name !='' && regVal.checked && isMail(regVal.email)){
    regVal.disabled = false;
  }else{
    regVal.disabled = true;
  }
}

// 信箱認證
const isMail = (email) => {
  let regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}

// 註冊帳戶api
const regMember = async () =>  {
  await apiMemberAdd(regVal.account,regVal.pwd,regVal.email,regVal.name).then(function (response) {
    if(response.success){
      console.log(response);
    }else{
      regVal.errorSw = true;
    }
  });
};

onMounted(() => {
  signNum.value = props.signNum;
});
</script>
  
  <style lang="scss" scoped>
@import "@/scss/method.scss";
@import "@/scss/shared.scss";

.signBody {
  width: 100%;
  height: 100vh;
  padding: 0 10px;
  position: fixed;
  @include pos(tl, 0);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  .closeBg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    @include pos(tl, 0);
  }
  @at-root .innerCnt {
    width: 100%;
    max-width: 650px;
    height: calc(100vh - 40px);
    max-height: 450px;
    background-color: #f5f5f5;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    user-select: none;
    position: relative;
    @at-root .leftBg {
      width: 45%;
      height: auto;
      background: url("@/assets/images/bg/signBg.jpg") no-repeat top center /
        cover;
      flex-shrink: 0;
      @include rwd(650) {
        display: none;
      }
    }

    @at-root .signCnt {
      width: 100%;
      padding: 30px 20px 20px;
      font-size: 14px;
      position: relative;
      .sortTitle {
        padding-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #282a8f;
      }

      .closeBtn {
        width: 22px;
        height: 22px;
        position: absolute;
        @include pos(tr, 8px);
        cursor: pointer;
        &::after,
        &::before {
          content: "";
          width: 100%;
          height: 2px;
          margin: auto;
          background-color: #a1a6ee;
          position: absolute;
          @include pos(tbl, 0);
        }
        &::after {
          transform: rotate(45deg);
        }
        &::before {
          transform: rotate(-45deg);
        }
      }

      .iptBox {
        label{
          width: 100%;
          display: inline-block;
        }
        label + label {
          margin-top: 8px;
        }
        
        input {
          @include fullNone;
          width: 100%;
          height: 42px;
          padding: 0 5px;
          background-color: #eee;
          border: 2px solid transparent;
          &:focus {
            border-color: #a1a6ee;
          }
        }
        .errorTxt{
          padding-top: 2px;
          color: #f00;
          font-size: 12px;
          text-align: right;
        }
      }
      .jumpSort {
        padding: 5px 0;
        font-size: 12px;
        text-align: right;
        cursor: pointer;
        color: #999;
        @include hover {
          &:hover {
            color: #f00;
            text-decoration: underline;
          }
        }
      }
      .ckBox {
        padding: 5px 0;
        display: flex;
        font-size: 12px;
        cursor: pointer;
        color: #333;
        p {
          padding-top: 2px;
        }
      }
      .btnBox {
        button {
          @include fullNone;
          width: 100%;
          margin: 20px auto 0;
          padding: 10px 20px;
          color: #fff;
          background-image: conic-gradient(from 1turn, #57d7ff, #1e50a6);
          font-weight: bold;
          font-size: 15px;
          letter-spacing: 1px;
          cursor: pointer;
          &:disabled {
            background-image: conic-gradient(from 1turn, #c9c9c9, #969696);
          }
        }
        p {
          padding: 5px 0;
          text-align: center;
          font-size: 12px;
          span {
            padding: 0 5px;
          }
        }
      }
    }
  }
}
</style>
  
  