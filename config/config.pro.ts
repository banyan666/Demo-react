import { defineConfig } from "umi";
const { UMI_ENV } = process.env; // 打包环境变量
export default defineConfig({
    define:{
        BASE_SERVER:'生产环境'
    }
});