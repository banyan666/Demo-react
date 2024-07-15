import { defineConfig } from "umi";
import routers from "./routers";
const { UMI_ENV } = process.env; // 打包环境变量
export default defineConfig({
    title:'react-demo',
    routes: routers,
    npmClient: 'pnpm',
    publicPath: "/",
    plugins:['@umijs/plugins/dist/antd', '@umijs/plugins/dist/request','@umijs/plugins/dist/model'],
    antd: {},
    model: {},
    request: {},
});
console.log(UMI_ENV)