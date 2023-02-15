import axios from "axios";

export const  httpUtils =(config)=>{
  return axios.create(config)
}

/**
 * 获取本地服务状态
 * @returns {Promise<AxiosResponse<any>>}
 */
export const httpStatus=()=>{
  return httpUtils().get("http://localhost:8022/i/status")
}

/**
 * 上传密码到本地服务
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
export const httpUpData=(data)=>{
  return httpUtils().post("http://localhost:8022/i/up",data)
}
