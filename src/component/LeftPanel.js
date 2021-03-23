import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drag,getData } from "../functions/dragdrop";
export default function LeftPanel() {
    return (
        <div className="leftPanel">
             <div style={{ background:'red',height:'200px',width:'200px',}} id="div"  draggable={true} onDragStart={(e) => {
         drag(e)
        }} onClick={(e)=>{
            getData(e)
        }}>

</div>
        </div>
    )
}
