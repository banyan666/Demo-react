import { defineConfig } from "umi";
const { UMI_ENV } = process.env; // 打包环境变量
export default defineConfig({
    define:{
        UMI_ENV:UMI_ENV,
        BASE_SERVER:'开发环境'
    }
});
