import React, {useState} from 'react'
import {Button} from "antd";
import {DndContext,useSensors,useSensor,MouseSensor} from "@dnd-kit/core";
import {Draggable} from "../../components/Drag/Draggable/index";
import {Droppable} from "../../components/Drag/Droppable/index";

export default function Drag() {

    const containers = ['A', 'B', 'C','D','E'];
    const [parent, setParent] = useState(null);
    const [title,setTitle] = useState('解决拖拽事件影响了无法触发点击事件问题')

    const draggableMarkup = (
        <Draggable id="draggable">
            <div style={{width:200,height:150,background:'pink',cursor:'move'}}>
                <span>可拖拽组件</span>
                <Button onClick={()=>setTitle('已解决')}>点击按钮触发</Button>
            </div>
        </Draggable>
    );
    //拖拽传感器，在移动像素5px范围内，不触发拖拽事件,就可以点击按钮触发点击事件
    const sensors = useSensors(
        useSensor(MouseSensor,{
            activationConstraint: {
                distance: 5, // 按住不动移动5px 时 才进行拖拽, 这样就可以触发点击事件
            },
        })
    )
    const handleDragEnd=(event)=> {
        console.log(event,'-----------');
        const {over} = event;
        setParent(over ? over.id : null);
    }

    return (
        <div style={{width:'calc(100% - 256px)'}}>
            <div>{title}</div>
            <DndContext onDragEnd={handleDragEnd} autoScroll={false} sensors={sensors}>
                <div style={{display:'flex',justifyContent: 'space-between',paddingTop:50}}>
                    {containers.map((id) => (
                        <Droppable key={id} id={id}>
                            <div style={{width:250,height:400,border:'1px solid #000'}}>
                                {parent === id ? draggableMarkup : '可落下的容器'}
                            </div>
                        </Droppable>
                    ))}
                </div>
                {parent === null ? draggableMarkup : null}
            </DndContext>
        </div>
    );
}
