import Cookie from "js-cookie";

const tokenKey = 'token'
const expiresTime = new Date(new Date().getTime() + 1000 * 60 * 60 * 5);
export const getToken = () => Cookie.get(tokenKey)
export const setToken = (token) => Cookie.set(tokenKey, token, { expires: expiresTime})
export const removeToken = () => Cookie.remove(tokenKey)