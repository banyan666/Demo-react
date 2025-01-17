import React, {useState,useEffect} from 'react'
import {jsPlumb} from "jsplumb";
import './index.css'

export default function Test(props:any) {
    let timer: any;
    const instance = jsPlumb.getInstance();//创建一个jsplumb对象
    const resize = () => {
        instance.repaintEverything();
    };
    const clear = () => {
        if (timer) {
            clearInterval(timer);
        }
        instance.deleteEveryConnection();
    };

    const init = () => {
        let m = 0.01;
        timer = setInterval(() => {
            m += 0.002;
            if (m > 0.98) {
                m = 0.012;
            }
            instance.deleteEveryConnection();

            //连接图一和图二
            instance.connect({
                source: "flowChart1",//图一的id
                target: "flowChart2",//图二的id
                endpoint: "Blank", //端点的形状设置为空
                connector: ["Flowchart", { cornerRadius: 2 }],
                anchor: ["Right", "Left"],//连接端点的位置，起始节点的右侧和结束节点的左侧
                paintStyle: { stroke: "#457DA5", strokeWidth: 2 },//线的样式
                overlays: [
                    ["Arrow", { width: 12, length: 12, location: m }],//小箭头样式及位置
                ],
            });
            //连接图二和图三
            instance.connect({
                source: "flowChart2",
                target: "flowChart3",
                endpoint: "Blank",
                connector: ["Flowchart", { cornerRadius: 2 }],
                anchor: ["Right", "Left"],
                paintStyle: { stroke: "#474554", strokeWidth: 2 },
                overlays: [
                    ["Arrow", { width: 12, length: 12, location: m }],
                ],
            });
            //连接图四和图三
            instance.connect({
                source: "flowChart4",
                target: "flowChart3",
                endpoint: "Blank",
                connector: ["Flowchart", { cornerRadius: 2 }],
                anchor: ["Right", "Left"],
                paintStyle: { stroke: "#27951D", strokeWidth: 2 },
                overlays: [
                    ["Arrow", { width: 12, length: 12, location: m }],
                ],
            });
            //连接图四和图二
            instance.connect({
                source: "flowChart4",
                target: "flowChart2",
                endpoint: "Blank",
                connector: ["Flowchart", { cornerRadius: 2 }],
                anchor: ["Bottom", "Bottom"],
                paintStyle: { stroke: "#27951D", strokeWidth: 2 },
                overlays: [
                    ["Arrow", { width: 12, length: 12, location: m }],
                ],
            });

        }, 20);
    };
    useEffect(() => {
        init();
        window.addEventListener("resize", resize);
        return () => {
            clear();
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div style={{width:'100%',height:'100%',padding:'200px 20px'}}>
            <div style={{width:'100%',height:300,display:"flex",justifyContent:"space-between"}}>
                <div id={'flowChart1'} style={{border: "5px solid #457DA5"}}>FlowChart1</div>
                <div id={'flowChart2'} style={{border: "5px solid #474554"}}>FlowChart2</div>
                <div id={'flowChart3'} style={{border: "5px solid #9C8D41"}}>FlowChart3</div>
                <div id={'flowChart4'} style={{border: "5px solid #27951D"}}>FlowChart4</div>
            </div>
        </div>
    );
};
