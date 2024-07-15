import {Button} from 'antd'
import {useModel} from "umi";


export default function HomePage() {
    const {title, setTitle} = useModel('home')
    return (
        <div>
            <Button type="primary" onClick={() => setTitle('修改的title')}>我是antd的按钮</Button>
            <div>{title}</div>
        </div>
    );
}
