import {instance} from "../../common/api/common.api";


export const authApi = {
  register:()=>{
return instance.post('/auth/login',{
          email: "nya-admin@nya.nya",
          password: "1qazxcvBG",
          rememberMe: false })
  }
}
