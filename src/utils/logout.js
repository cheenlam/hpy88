import router from "@/router/index";
import { removeToken } from "@/utils/cookies";
import { nextTick } from "vue";

export const logOut = () => {
  removeToken();
  router.push("/login");
  nextTick();
};
