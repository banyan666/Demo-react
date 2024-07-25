import { Link, Outlet,history } from 'umi';
import {Menu} from "antd";
import widthAuth from '@/pages/wrappers/auth'


const items = [
    {
        key: 'index',
        label: '主页',
    },
    {
        key: 'page2',
        label: '页面1',
    },
    {
        key: 'page3',
        label: '页面2',
    },
];
const onClick = (e) =>{
    console.log(e,'ee')
    history.push('/'+e.key)
}
const Layout = () =>{
    return (
        <div style={{display:'flex',width:'100%',height:'100%'}}>
            <Menu
                onClick={onClick}
                style={{ width: 256,height:'100%' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
            <Outlet />
        </div>
    );
}
export default widthAuth(Layout)
