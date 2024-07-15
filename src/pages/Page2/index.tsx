import React, {useState} from 'react'
import {DndContext} from "@dnd-kit/core";
import {Draggable} from "../../components/Drag/Draggable/index";
import {Droppable} from "../../components/Drag/Droppable/index";

export default function Drag() {

    const containers = ['A', 'B', 'C','D','E'];
    const [parent, setParent] = useState(null);

    const draggableMarkup = (
        <Draggable id="draggable">
            <div style={{width:200,height:150,background:'pink',cursor:'move'}}>可拖拽组件</div>
        </Draggable>
    );

    const handleDragEnd=(event)=> {
        console.log(event,'-----------');
        const {over} = event;
        setParent(over ? over.id : null);
    }

    return (
        <div style={{width:'calc(100% - 256px)'}}>
            <DndContext onDragEnd={handleDragEnd} autoScroll={false}>
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
