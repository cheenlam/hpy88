<template>
 <!-- <div>{{ $route.params.id }}</div> -->
    <div class="infoCentre">
        <div class="contentSel">
            <ul>
              <li :class="{'on' : contentSel == 0}" @click="contentSel = 0,resetSw()"><router-link to="/InfoCentre/faqs">常見問題</router-link></li>
              <li :class="{'on' : contentSel == 1}" @click="contentSel = 1,resetSw()"><router-link to="/InfoCentre/terms">條款與條規</router-link></li>
            </ul>
        </div>

        <!-- 條款與條規 -->
        <div class="termsBox" v-if="contentSel == 1">
            <div class="slogan">
                <ul>
                    <li>本页面所包含的内容说明您可访问及使用公司网站的权利。</li>
                    <li>在网站内提供的游戏和促销的条款和条件将依据个别规定为有效，这里的所有信息仅供参考。</li>
                </ul>
            </div>

            <ul class="termsList">
                <li  v-for="(item, index) in germsList" :key="index">
                    <div class="title" @click="resetSw(),item.sw = !item.sw">
                        <p>{{ item.listTitle }}</p>
                        <div class="arrow" :class="{'open' : item.sw}"></div>
                    </div>
                    <div class="details"  v-if="item.sw">
                        <ul>  
                            <li v-for="(detail, idx) in item.details" :key="idx">
                                <p>{{ detail.title }}</p>
                                <ol>
                                    <li v-for="(list, idx) in detail.list" :key="idx">{{ list }}</li>
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
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from "vue";
import { getGermsList } from "@/api/api";
const route = useRoute();
const contentSel = ref(0);
// 更改內容選擇
const chgCnt = () => {
    switch(route.params.id){
        case 'faqs':  contentSel.value = 0; break;
        case 'terms':  contentSel.value = 1; break;
    }
}

// 條款與條規
const germsList = ref([]);
// 取得清單
const getList = () => {
    getGermsList().then((res) => {
        germsList.value = res;
    });
};
// 重製所有開關
const resetSw = () => {
    germsList.value.forEach( item => {
        item.sw = false;
    })
}

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

.infoCentre{
    max-width: 1320px;
    padding: 20px 10px 100px;
    margin: auto;
    font-size: 14px;
    @at-root .contentSel{
        ul{
            display: flex;
            gap: 5px;
        }
        li{
            padding: 8px 15px;  
            color: #fff;
            background: linear-gradient(-180deg, #a1effb, #6eccff, #4295f6);
            box-shadow: 0 3px 4px rgba(10, 16, 32, 0.3);
            border-radius: 5px;
            cursor: pointer;
            filter: grayscale(100%);
            &.on{
                filter: grayscale(0%);
            }
        }
    }
    @at-root .termsBox{
        padding: 15px 0;
        .slogan{
            margin-bottom: 15px;
            li{
                color: #999;
            }
        }
        .termsList{
            & > li + li{
               margin-top: 5px;
            }
            .title{
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
            .arrow{
                width: 18px;
                height: 19px;
                margin-left: 30px;
                background: url("@/assets/images/icon/angle-down.svg");
                flex-shrink: 0;
                &.open{
                    transform: rotate(180deg);
                }
            }
        }
        .details{
            padding: 15px 15px 40px;
            color: #999;
            li + li{
                margin-top: 15px;
            }
            ol{
                padding: 5px 0 0 28px;
                list-style-type: square;
                li +li {
                    margin-top: 5px;
                }
            }
        }

    }
}

</style>
        
        