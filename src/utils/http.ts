import {request} from "umi";

let url = '请求地址'
let options ={
    method: 'get',
    params: {},
    url: url
}
export const requestFun = async () =>{
    return await request(url,options)
}
