<template>
  <!-- <div>{{ $route.params.id }}</div> -->
  <div class="infoCentre">
    <div class="contentSel">
      <ul>
        <li :class="{ on: contentSel == 0 }" @click="resetSw(), (faqSel = 0)">
          <router-link to="/InfoCentre/faqs">常見問題</router-link>
        </li>
        <li :class="{ on: contentSel == 1 }" @click="resetSw(), (faqSel = 0)">
          <router-link to="/InfoCentre/terms">條款與條規</router-link>
        </li>
      </ul>
    </div>

    <!-- 常見問題 -->
    <div class="faqsBox" v-if="contentSel == 0">
      <div class="faqSel">
        <ul>
          <li
            v-for="(item, index) in gaqsList"
            :key="index"
            :class="{ on: faqSel == index }"
            @click="(faqSel = index), resetSw()"
          >
            {{ item.selTitle }}
          </li>
        </ul>
      </div>
      <template v-for="(item, index) in gaqsList" :key="index">
        <ul class="faqsList" v-if="faqSel == index">
          <li v-for="(i, idx) in item.faqCnt" :key="idx">
            <div class="title" @click="resetSw(), (i.sw = !i.sw)">
              <p>{{ i.listTitle }}</p>
              <div class="arrow" :class="{ open: i.sw }"></div>
            </div>
            <div class="details" v-if="i.sw">
              <ul>
                <li v-for="(detail, idx) in i.details" :key="idx">
                  <p>{{ detail.title }}</p>
                  <ol v-if="detail.list.length > 0">
                    <li v-for="(list, idx) in detail.list" :key="idx">
                      {{ list }}
                    </li>
                  </ol>

                  <ul class="extraList" v-if="detail.extraList.length > 0">
                    <li v-for="(extra, idx) in detail.extraList" :key="idx">
                      <h5>{{ extra.title }}</h5>
                      <ul v-if="extra.details.length > 0" class="deepList">
                        <li v-for="(k, idx) in extra.details" :key="idx">
                          <p v-if="k.detail != ''">{{ k.detail }}</p>
                          <ol v-if="k.list.length > 0">
                            <li v-for="(j, idx) in k.list" :key="idx">
                              {{ j }}
                            </li>
                          </ol>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </template>
    </div>

    <!-- 條款與條規 -->
    <div class="termsBox" v-if="contentSel == 1">
      <div class="slogan">
        <ul>
          <li>本页面所包含的内容说明您可访问及使用公司网站的权利。</li>
          <li>
            在网站内提供的游戏和促销的条款和条件将依据个别规定为有效，这里的所有信息仅供参考。
          </li>
        </ul>
      </div>

      <ul class="termsList">
        <li v-for="(item, index) in germsList" :key="index">
          <a class="title" @click="resetSw(index), (item.sw = !item.sw)" >
            <p>{{ item.listTitle }}</p>
            <div class="arrow" :class="{ open: item.sw }"></div>
          </a>
          <div class="details" v-if="item.sw">
            <ul>
              <li v-for="(detail, idx) in item.details" :key="idx">
                <p>{{ detail.title }}</p>
                <ol v-if="detail.list.length > 0">
                  <li v-for="(list, idx) in detail.list" :key="idx">
                    {{ list }}
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
        
               
<script setup >
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { getGermsList, getFaqsList } from "@/api/api";
const route = useRoute();
const contentSel = ref(0);
// 更改內容選擇
const chgCnt = () => {
  switch (route.params.id) {
    case "faqs":
      contentSel.value = 0;
      break;
    case "terms":
      contentSel.value = 1;
      break;
  }
};

// 常見問題
const gaqsList = ref([]);
const faqSel = ref(0);

// 條款與條規
const germsList = ref([]);

// 取得清單
const getList = () => {
  getFaqsList().then((res) => {
    gaqsList.value = res;
  });
  getGermsList().then((res) => {
    germsList.value = res;
  });
};

// 重製所有開關
const resetSw = (index) => {
  gaqsList.value.forEach((item) => {
    item.faqCnt.forEach((list) => {
      list.sw = false;
    });
  });
  germsList.value.forEach((item) => {
    item.sw = false;
  });
};

watch(
  () => route.params.id,
  (newValue, oldVale) => {
    chgCnt();
  },
  { deep: true }
);

onMounted(() => {
  chgCnt();
  getList();
});
</script>
<style lang="scss" scoped>
@import "@/scss/method.scss";
@import "@/scss/shared.scss";

.infoCentre {
  max-width: 1320px;
  padding: 15px 10px 100px;
  margin: auto;
  font-size: 14px;
  @at-root .contentSel {
    @include map-get(background-color, $colorStyle, blue, 06);
    color: #fff;
    ul {
      display: flex;
    }
    li {
      cursor: pointer;
      transition: .3s;
      &.on {
        @include map-get(background-color, $colorStyle, blue, 07);
      }
      @include hover {
          &:hover {
            @include map-get(background-color, $colorStyle, blue, 07);
          }
      }
      a {
        height: 40px;
        padding: 0px 15px;   
        display: flex;
        align-items: center;
      }
    }
  }

  @at-root .faqsBox {
    .faqSel {
      padding: 20px 5px 10px;
      margin-bottom: 5px;
      overflow: auto;
      ul {
        display: flex;
        gap: 5px;
      }
      li {
        height: 30px;
        padding: 0 15px;
        line-height: 30px;
        border-radius: 30px;
        cursor: pointer;
        position: relative;
        font-weight: bold;
        flex-shrink: 0;
        color: #3764a3;
        box-shadow: 0 1px 4px rgba(10, 16, 32, 0.3);
        font-size: 12px;
        &.on {
          color: #fff;
          background: linear-gradient(-180deg, #a1effb, #6eccff, #4295f6);
        }
      }
    }

    .faqsList {
      & > li + li {
        margin-top: 5px;
      }
      .title {
        padding: 10px;
        color: #333;
        font-weight: bold;
        background-color: #deecff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
      }
      .arrow {
        width: 18px;
        height: 19px;
        margin-left: 30px;
        background: url("@/assets/images/icon/angle-down.svg");
        flex-shrink: 0;
        &.open {
          transform: rotate(180deg);
        }
      }
    }
    .details {
      padding: 15px 15px 40px;
      color: #999;
      li + li {
        margin-top: 15px;
      }
      ol {
        padding: 5px 0 0 28px;
        list-style-type: square;
        li + li {
          margin-top: 5px;
        }
      }
    }

    .extraList {
      margin-top: 15px;
      padding-left: 10px;
      h5 {
        font-size: 15px;
        font-weight: bold;
        color: #7a78eb;
      }
      p {
        padding: 5px 0;
      }
      .deepList {
        li + li {
          margin-top: 0px;
        }
        ol {
          padding-bottom: 10px;
        }
      }
    }
  }

  @at-root .termsBox {
    padding: 15px 0;
    .slogan {
      margin-bottom: 15px;
      li {
        color: #999;
      }
    }
    .termsList {
      & > li + li {
        margin-top: 5px;
      }
      .title {
        padding: 10px;
        color: #333;
        font-weight: bold;
        background-color: #deecff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
      }
      .arrow {
        width: 18px;
        height: 19px;
        margin-left: 30px;
        background: url("@/assets/images/icon/angle-down.svg");
        flex-shrink: 0;
        &.open {
          transform: rotate(180deg);
        }
      }
    }
    .details {
      padding: 15px 15px 40px;
      color: #999;
      li + li {
        margin-top: 15px;
      }
      ol {
        padding: 5px 0 0 28px;
        list-style-type: square;
        li + li {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
        
        