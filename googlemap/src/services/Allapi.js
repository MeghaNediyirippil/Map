import { BASE_URL } from "./BaseURL"
import { commonAPI } from "./CommonAPI"

export const userRegisterAPI = async(user)=>{
    return await commonAPI('POST',`${BASE_URL}/user/register`,user,"")
}

export const userLoginAPI = async (user)=>{
   return await commonAPI('POST',`${BASE_URL}/user/login`,user,"")
}

export const historyAddAPI = async (historyDetails)=>{
    return await commonAPI('POST',`${BASE_URL}/history-add`,historyDetails,"")
 }

 export const historyFetchAPI = async (userId)=>{
    return await commonAPI('GET',`${BASE_URL}/getHistory/${userId}`,"","")
 }

 export const historyDeleteAPI = async (id) => {
   return await commonAPI('DELETE', `${BASE_URL}/deleteHistory`, { id }, "");
}


