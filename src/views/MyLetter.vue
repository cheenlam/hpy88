<template>
  <div class="formBox">
    <!-- 表格title -->
    <div class="formTitle">
      <!-- 頂部工具列 -->
      <div class="tool">
        <div
          class="icon ckBox"
          :class="{ on: allSelect }"
          @click="chgAllSel"
        ></div>
        <div class="icon delMail" @click="delMail()"></div>
        <div class="icon search" @click="selDateSw = !selDateSw"></div>
      </div>
    </div>
    <!-- 搜尋選擇 -->
    <div class="selDate" :class="{ on: selDateSw }">
      <div class="selectBox">
        <select v-model.number="form.status">
          <option value="-1">全部</option>
          <option value="0">未读取</option>
          <option value="1">已读取</option>
        </select>
        <div class="dataChg" @click="chgDate(0)">今</div>
        <div class="dataChg" @click="chgDate(1)">周</div>
        <div class="dataChg" @click="chgDate(2)">月</div>
      </div>
      <div class="inputBox">
        <input v-model="form.registerDateFrom" type="date" />
        <span>至</span>
        <input v-model="form.registerDateTo" type="date" />
      </div>
      <button type="submit" class="btn" @click="search">搜寻</button>
    </div>

    <!-- 訊息列表 -->
    <div class="msgList">
      <Paginator
        @updatePage="updatePage"
        :nowPage="currentPage"
        :totalPage="totalPage"
      />
      <div class="msg_tb" ref="tbRef">
        <table>
          <!-- 標頭 -->
          <tr class="msg_main">
            <th width="50%">信件主旨</th>
            <th width="22%">寄件人</th>
            <th width="22%">寄件时间</th>
          </tr>
          <!-- 沒有信件資料 -->
          <tr v-if="data.length == 0">
            <td colspan="3" class="noData">
              <div class="icon">
                <img src="@/assets/images/noMsg.svg" alt="no message" />
              </div>
              <p>暂无讯息</p>
            </td>
          </tr>
          <!-- 信件資料 -->
          <template v-for="(item, index) in data" :key="index" v-else>
            <tr class="itemMsg">
              <td class="msg_title">
                <div class="subject">
                  <div
                    class="state"
                    @click="(item.chackSw = !item.chackSw), ckMailSel()"
                  >
                    <div class="mainSel" :class="{ on: item.chackSw }"></div>
                    <div class="isRead" :class="{ on: item.is_read }"></div>
                  </div>
                  <p @click="(item.isOpen = !item.isOpen), ckMailRead(item)">
                    <span>{{ item.title }}</span>
                  </p>
                </div>
              </td>
              <td class="time">
                <p @click="(item.isOpen = !item.isOpen), ckMailRead(item)">
                  {{ item.updated_by }}
                </p>
              </td>
              <td class="time">
                <p @click="(item.isOpen = !item.isOpen), ckMailRead(item)">
                  {{ item.updated_at }}
                </p>
              </td>
            </tr>
            <tr class="itemCnt" v-show="item.isOpen">
              <td colspan="3">
                <ul>
                  <li>
                    <div class="itemCnt_title">信件主旨</div>
                    <p>{{ item.title }}</p>
                  </li>
                  <li>
                    <div class="itemCnt_title">信件內容</div>
                    <p v-html="item.content"></p>
                  </li>
                </ul>
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>

    <Modal :isOpen="isOpen" @close="close" @confirm="confirm('del')">
    <template #DialogTitle>
      <div class="warningTitle">
        <div class="icon">
          <img src="@/assets/images/icon/deleteMail.svg" alt="deleteMail" />
        </div>
      </div>
    </template>
    <template #DialogMain>
      <div class="warningTxt">确定要删除邮件</div>
    </template>
  </Modal>
  </div>

</template>

<script setup>
import Modal from "@/components/Modal.vue";
import LogoutModal from "@/components/LogoutModal.vue";
import Paginator from "@/components/Paginator.vue";
import { onMounted, ref, reactive } from "vue";
import { apiGetMessageListData, apiChgMainStatus, apiDelMain } from "@/api/api";
import { getToken } from "@/utils/cookies";
import { reOneWeek, reOneMonth } from "@/utils/method.js";

const tbRef = ref(null);
const data = ref([]);
const currentPage = ref(1);
const totalPage = ref(1);
const form = reactive({
  status: -1,
  registerDateFrom: "",
  registerDateTo: new Date().toISOString().slice(0, 10),
});
// 所有郵件全選與否
const allSelect = ref(false);
// 彈窗開關
const isOpen = ref(false);
const isDisabled = ref(false);
const isLogoutOpen = ref(false);
// 搜尋列開關
const selDateSw = ref(false);
const isSearch = ref(false);


// 登出
const signOut = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('mailNotRead');
  location.href = '/'
}

// 搜尋
const search = () => {
  selDateSw.value = false;
  currentPage.value = 1;
  isSearch.value = true;
  getMsg();
};

// 更改日期選擇(今天,一周,一個月)
const chgDate = (val) => {
  switch(val){
    case 0:
      form.registerDateFrom = new Date().toISOString().slice(0, 10); break;
    case 1:
      form.registerDateFrom = reOneWeek(); break;
    case 2:
      form.registerDateFrom = reOneMonth(); break;
  }
  form.registerDateTo = new Date().toISOString().slice(0, 10);
};

// 修改分頁
const updatePage = (val) => {
  allSelect.value = false;
  currentPage.value = val.value;
  getMsg();
};

// 取得信件
const getMsg = async () => {
  const from = form.registerDateFrom;
  const to = form.registerDateTo;
  const status = form.status;
  const token = sessionStorage.getItem('token');
  await apiGetMessageListData(token)
    .then((res) => {
      if (res.code == 200) {
        if (!isSearch.value) {
          let arr;
          arr  = [...res.data.list];
          totalPage.value = arr.length == 0 ? 1 : Math.ceil(arr.length / 10);
          data.value = arr.filter((item) => {
            return (
              arr.indexOf(item) >= (currentPage.value - 1) * 10 &&
              arr.indexOf(item) <= currentPage.value * 10 - 1
            );
          });

        } else {
          let filterVal;
          filterVal = res.data.list.filter((item) => {
            if (form.status == -1) {
              return (
                from <= item.created_at.split(" ")[0] &&
                item.created_at.split(" ")[0] <= to
              );
            } else {
              return (
                from <= item.created_at.split(" ")[0] &&
                item.created_at.split(" ")[0] <= to &&
                item.is_read == status
              );
            }
          });

          totalPage.value = filterVal.length == 0 ? 1 : Math.ceil(filterVal.length / 10);
          data.value = filterVal.filter((item) => {
            return (
              filterVal.indexOf(item) >= (currentPage.value - 1) * 10 &&
              filterVal.indexOf(item) <= currentPage.value * 10 - 1
            );
          });
        }

        data.value.forEach((item) => {
          item.chackSw = false;
          item.isOpen = false;
        });

        // 卷軸至頂
        tbRef.value.scroll({ top: 0 });
      } else {
        handleShowLogoutModal();
        signOut();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};


// 刪除信件
const delMsg = () => {
  data.value.forEach(function (item) {
    if (item.chackSw) {
      const token = sessionStorage.getItem('token');
      const id = item.id;
      apiDelMain(token, id)
        .then((res) => {
          if (res.code == 200) {
            data.value.splice(data.value.indexOf(item), 1);
            isOpen.value = false;
          } else {
            handleShowLogoutModal();
          }
        })
        .catch((err) => {
          console.log(err);
          signOut();
        });
    }
  });
};

// 取得未讀信件數量
const getMailNotRead = async () => {
  const token = sessionStorage.getItem('token');
  await apiGetMessageListData(token)
    .then((res) => {
      let mailNotRead = [...res.data.list]
      mailNotRead = mailNotRead.filter((item) => {
        return (item.is_read == 0);
      });
      sessionStorage.setItem("mailNotRead",mailNotRead.length);
    })
    .catch((err) => {
      console.log(err);
      signOut();
    });
};


// 更改mail是否全選
const chgAllSel = () => {
  data.value.forEach(function (item) {
    item.chackSw = !allSelect.value;
  });
  allSelect.value = !allSelect.value;
};

// 單一信件點選時,判斷是否全選
const ckMailSel = () => {
  let num = 0;
  data.value.forEach(function (item) {
    if (item.chackSw) num++;
  });
  allSelect.value = num == data.value.length ? true : false;
};

// 確認該信件已讀狀態
const ckMailRead = (val) => {
  if (!val.is_read) {
    const token = sessionStorage.getItem('token');
    const id = val.id;
    apiChgMainStatus(token, id)
      .then((res) => {
        if (res.code == 200) {
          val.is_read = 1;
          getMailNotRead();
        } else {
          handleShowLogoutModal();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// 刪除信件打開彈窗(至少選擇1項)
const delMail = () => {
  let num = 0;
  data.value.forEach(function (item) {
    if (item.chackSw) num++;
  });
  if (num > 0) isOpen.value = true;
};

// 彈窗關閉
const close = () => {
  isOpen.value = false;
};

// 彈窗確認刪除
const confirm = (val = "") => {
  if (val === "del") {
    delMsg();
    getMailNotRead();
  } else {
    isDisabled.value = true;
    isLogoutOpen.value = false;
  }
};

// 呼叫登出彈窗
const handleShowLogoutModal = () => {
  isDisabled.value = false;
  isLogoutOpen.value = true;
};

const init = onMounted(async () => {
  form.registerDateFrom = reOneMonth();
  await getMsg();
  window.addEventListener("resize", () => {
    selDateSw.value = false;
  });
});
</script>

<style lang="scss" scoped>
@import "@/scss/method.scss";
@import "@/scss/shared.scss";
@import "@/scss/msgList.scss";
</style>
