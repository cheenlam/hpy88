<template>
    <div class="formBox">
      <div class="formTitle">
        <!-- 公告種類選擇 -->
        <div class="selSort">
          <ul>
            <li
              v-for="item in tabs"
              :key="item"
              :class="{ active: currentTab == item }"
              @click="currentTab = item"
            >
              {{ item === "anncmnt" ? "公告" : "优惠活动" }}
            </li>
          </ul>
        </div>
        <!-- 頂部工具列 -->
        <div class="tool">
          <div class="icon search" @click="selDateSw = !selDateSw"></div>
        </div>
      </div>
  
      <!-- 日期選擇 -->
      <div class="selDate" :class="{ on: selDateSw }">
        <div class="selectBox">
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
      <div class="msgList" v-if="currentTab === 'anncmnt'">
        <div class="msg_tb">
          <table>
            <!-- 標頭 -->
            <tr class="msg_main">
              <th width="50%">公告主旨</th>
              <th width="22%">生效时间</th>
              <th width="22%">失效时间</th>
            </tr>
            <!-- 沒有公告資料 -->
            <tr v-if="AnnouncementData.length == 0">
              <td colspan="3" class="noData">
                <div class="icon">
                  <img src="@/assets/images/noMsg.svg" alt="no message" />
                </div>
                <p>暂无任何公告</p>
              </td>
            </tr>
            <!-- 公告資料 -->
            <template
              v-for="(item, index) in AnnouncementData"
              :key="index"
              v-else
            >
              <tr class="itemMsg" @click="item.isOpen = !item.isOpen">
                <td class="msg_title">
                  <div class="subject">
                    <p><span>{{ item.title }}</span></p>
                  </div>
                </td>
                <td class="time"><p>{{ item.time_start }}</p></td>
                <td class="time"><p>{{ item.time_end }}</p></td>
              </tr>
              <tr class="itemCnt" v-show="item.isOpen">
                <td colspan="3">
                  <ul>
                    <li>
                      <div class="itemCnt_title">公告主旨</div>
                      <p>{{ item.title }}</p>
                    </li>
                    <li>
                      <div class="itemCnt_title">公告內容</div>
                      <p v-html="item.content"></p>
                    </li>
                  </ul>
                </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
    
      <!-- 賽事公告列表 -->
      <div class="msgList" v-if="currentTab === 'activity'">
        <div class="msg_tb">
          <table>
            <!-- 標頭 -->
            <tr class="msg_main">
              <th width="50%">公告主旨</th>
              <th width="22%">生效时间</th>
              <th width="22%">失效时间</th>
            </tr>
            <!-- 沒有公告資料 -->
            <tr v-if="ActivityData.length == 0">
              <td colspan="3" class="noData">
                <div class="icon">
                  <img src="@/assets/images/noMsg.svg" alt="no message" />
                </div>
                <p>暂无任何公告</p>
              </td>
            </tr>
            <!-- 公告資料 -->
            <template v-for="(item, index) in ActivityData" :key="index" v-else>
              <tr class="itemMsg" @click="item.isOpen = !item.isOpen">
                <td class="msg_title">
                  <div class="subject">
                    <p><span>{{ item.title }}</span></p>
                  </div>
                </td>
                <td class="time"><p>{{ item.time_start }}</p></td>
                <td class="time"><p>{{ item.time_end }}</p></td>
              </tr>
              <tr class="itemCnt" v-show="item.isOpen">
                <td colspan="3">
                  <ul>
                    <li>
                      <div class="itemCnt_title">公告主旨</div>
                      <p>{{ item.title }}</p>
                    </li>
                    <li>
                      <div class="itemCnt_title">公告內容</div>
                      <p v-html="item.content"></p>
                    </li>
                  </ul>
                </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import { onMounted, ref, reactive } from "vue";
  import { apiGetAnnouncementData, apiGetActivityData } from "@/api/api";
  import { reOneWeek, reOneMonth } from "@/utils/method.js";
  
  const tabs = ref(["anncmnt", "activity"]);
  const currentTab = ref("anncmnt");
  const AnnouncementData = ref([]);
  const ActivityData = ref([]);
  const form = reactive({
    registerDateFrom: new Date().toISOString().slice(0, 10),
    registerDateTo: new Date().toISOString().slice(0, 10),
  });

  // 搜尋列開關
  const selDateSw = ref(false);
  
  // 搜尋
  const search = () => {
    selDateSw.value = false;
    const from = form.registerDateFrom;
    const to = form.registerDateTo;
  
    if (from === "" || to === "") {
      currentTab.value === "anncmnt" ? getAnncmnt() : getActivity();
    } else if (from > to) {
      currentTab.value === "anncmnt"
        ? (AnnouncementData.value = [])
        : (ActivityData.value = []);
      return;
    } else {
      currentTab.value === "anncmnt" ? getAnncmnt(true) : getActivity(true);
    }
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
  
  
  // 取得系統公告
  const getAnncmnt = async (isSearch = false) => {
    AnnouncementData.value = [];
    const from = form.registerDateFrom;
    const to = form.registerDateTo;
    await apiGetAnnouncementData()
      .then((res) => {
        if (res.code === 200) {
          if (!isSearch) {
            AnnouncementData.value = [...res.data.list];
            AnnouncementData.value.forEach((item) => {
              item.isOpen = false;
            });
          } else {
            AnnouncementData.value = res.data.list.filter((item) => {
              return (
                from <= item.time_start.split(" ")[0] &&
                item.time_start.split(" ")[0] <= to
              );
            });
            AnnouncementData.value.forEach((item) => {
              item.isOpen = false;
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  // 取優惠活動
  const getActivity = async (isSearch = false) => {
    ActivityData.value = [];
    const from = form.registerDateFrom;
    const to = form.registerDateTo;
    await apiGetActivityData()
      .then((res) => {
        if (res.code === 200) {
          if (!isSearch) {
            ActivityData.value = [...res.data.list];
            ActivityData.value.forEach((item) => {
              item.isOpen = false;
            });
          } else {
            ActivityData.value = res.data.list.filter((item) => {
              return (
                from <= item.time_start.split(" ")[0] &&
                item.time_start.split(" ")[0] <= to
              );
            });
            ActivityData.value.forEach((item) => {
              item.isOpen = false;
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const init = onMounted(async () => {
    await getAnncmnt();
    await getActivity();
  
    window.addEventListener("resize", () => { selDateSw.value = false });
  });
  </script>
  
  <style lang="scss" scoped>
  @import "@/scss/method.scss";
  @import "@/scss/shared.scss";
  @import "@/scss/msgList.scss";
  
  </style>
  