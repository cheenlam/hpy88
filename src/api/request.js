import axios from "axios";
import { networkConfig } from '@/api/networkConfig'
// import { errorCodeType } from '@/utils/error-code-type'
// import { getToken, setToken, removeToken } from '@/utils/cookies'
// import { useConfirmModal, useConfirm } from "@/composables/useConfimModal";
import router from '@/router/index'



// 創建axios實例
export function requestService(config) {
    const service = axios.create()

    // request攔截
    service.interceptors.request.use(
        (config) => {
            // const token = getToken()
            // if (token) {
            //     config.headers.Authorization = `Bearer ${token}`;
            // }
            return config
        },
        (error) => {
            // console.log(error)
            Promise.reject(error)
        })


    // 設置 request 攔截器
    // axios.interceptors.request.use((config) => {
    //     const token = JSON.parse(Cookies.get('userInfo').token)
    //     // token本身是會過期的，需要返回狀態查詢是不是過期
    //     token && (config.headers.Authorization = token)
    //     return config
    //   })




    // 響應攔截
    service.interceptors.response.use(
        (response) => {
            // console.log('攔截response', response);
            if (response.status === 200) {
                // console.log('正確200');
                return Promise.resolve(response);
            } else {
                // console.log('錯誤200');
                return Promise.resolve(response);
            }
        },
        (error) => {
            // console.log('error.response', error.response);
            let { message } = error;
            if (error && error.response) {
                const errorCode = error.response.status
                // message = errorCodeType(errorCode)
                if(errorCode === 401) {
                    // useConfirm(message).then(() => {
                    //     router.push('/')
                    // })
                } else {
                    // useConfirm(message)
                }
            } else if (message == "Network Error") {
                message = "後端接口連接異常"
                // useConfirm(message)
                // console.log('message' + message)
            }
            return Promise.reject(error)
        }
    )
    return service(config)
}