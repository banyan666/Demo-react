import {useState} from "react";

export default ()=>{
    const [title,setTitle] = useState('标题')
    const getRequestData = () =>{
        return {a:1,b:2,c:3}
    }
    return{
        title,
        setTitle,
        getRequestData
    }
}