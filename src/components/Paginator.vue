<template>
  <div class="paginator">
    <Pagination v-model="currentPage" :pages="totalPage" />
  </div>
</template>
  
<script>
import Pagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  components: {
    Pagination,
  },
  emits: ["updatePage"],
  props: {
    nowPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 0,
    },
  },

  setup(props, { emit }) {
    const currentPage = ref(1);

    watch(
      () => currentPage.value,
      () => {
        emit("updatePage", currentPage);
      }
    );
    watch(
      () => props.nowPage,
      () => {
        currentPage.value = props.nowPage;
      }
    );
   
    return {
      currentPage,
    };
  },
};
</script>
  