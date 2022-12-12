<template>
  <div class="gamePage">
    <div class="topBanner">
        <img src="@/assets/images/bg/computer_top.webp">
    </div>

    <div class="gameBox">
        <div class="gameSel">
            <ul>
                <li>BNG電子</li>
                <li>必贏電子</li>
                <li>DT電子</li>
                <li>RG電子</li>
                <li>PLAY電子</li>
                <li>RSG電子</li>
                <li>RTG電子</li>
                <li>SP電子</li>
            </ul>
        </div>
        <div class="gameList">
            <ul>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/01.png">
                        <p>钱龙-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/02.png">
                        <p>黑狼-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/03.png">
                        <p>满贯金财神-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/04.png">
                        <p>轰炸糖果</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/05.png">
                        <p>快樂鳥嘉年華</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/06.png">
                        <p>黃金特快車</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/07.png">
                        <p>金禧迎狮-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/08.png">
                        <p>快乐鱼</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/09.png">
                        <p>淘金乐-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/10.png">
                        <p>皇朝盛世2-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/11.png">
                        <p>致命毒苹果-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/12.png">
                        <p>诸神荣耀</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/13.png">
                        <p>采珠潜水员2-藏宝箱</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/14.png">
                        <p>烈日女神-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/15.png">
                        <p>钱滚滚圣甲虫</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/16.png">
                        <p>太阳神殿2-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/17.png">
                        <p>太阳神殿3-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/18.png">
                        <p>好运金财神-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/19.png">
                        <p>聖甲降臨-集鸿运</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="@/assets/images/slotList/20.png">
                        <p>大三元-集鸿运</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="pageTag"><Paginator :nowPage="1" :totalPage="2"/></div>
    </div>
  </div>
</template>
  
  
  
<script setup>
import {} from "@/api/api";
import { onMounted, ref } from "vue";
import Paginator from "@/components/Paginator.vue";

</script>
<style lang="scss" scoped>
  @import "@/scss/method.scss";
  @import "@/scss/shared.scss";
  
.gamePage{
    padding-bottom: 50px;
    background: repeat-y url("@/assets/images/bg/homeCnt.webp");
    @at-root .topBanner{
        max-width: 1920px;
        margin: auto;
    }
    @at-root .gameBox{
        max-width: 1320px;
        padding: 20px 10px;
        width: calc(100vw - 20px);
        margin: auto;
        border: 2px solid #fff;
        border-radius: 8px;
        background: linear-gradient(180deg, #edf6ff, #fff 53.65%, #f0f7ff);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
        .gameSel{
            margin-bottom: 20px;
            padding: 15px 20px;
            border-bottom: 1px solid #c5c5c5;
            ul{
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
            }
            li{
                min-width: 180px;
                padding: 8px 10px;
                color: #fff;
                background: linear-gradient(180deg, #848c94 0%, #cdcdcd 100%);
                flex: 1;
                text-align: center;
                border-radius: 3px;
                cursor: pointer;
            }
        }
        .gameList{
            padding: 0 20px;
            ul{
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            li{
                min-width: calc(100% / 5 - 10px);
                flex: 1;
            }
            p{
                padding: 0 5px;
                margin-top: 3px;
                text-align: center;
                @include txtChip(1)
            }
        }
        .pageTag{
           padding-top: 30px;
           display: flex;
           justify-content: center;
        }
    }
}

@include rwd(900){
    .gameBox{
        .gameList{
            li{
                min-width: calc(100% / 4 - 10px);
            }
        }
    }
}

@include rwd(700){
    .gameBox{
        .gameList{
            li{
                min-width: calc(100% / 3 - 7px);
                max-width: calc(100% / 3 - 7px);
            }
        }
    }
}

@include rwd(500){
    .gameBox{
        .gameSel{
            li{
                min-width: calc(100% / 2 - 10px);
            }
        }
        .gameList{
            li{
                min-width: calc(100% / 2 - 10px);
                max-width: unset;
            }
        }
    }
}

</style>
  
  