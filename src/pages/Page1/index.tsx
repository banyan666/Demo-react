import {Button} from 'antd'
import {useModel} from "umi";
import './index.css'


export default function HomePage() {
    const {title, setTitle} = useModel('home')
    return (
        <div style={{width:'100%'}}>
            <Button type="primary" onClick={() => setTitle('修改的title')}>我是antd的按钮</Button>
            <div>{title}</div>
            <div style={{width:'100%',height:300}}>
                <div className={'card'}>炫酷的box</div>
            </div>
        </div>
    );
}
