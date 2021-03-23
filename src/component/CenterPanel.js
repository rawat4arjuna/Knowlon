import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { drop, allowDrop } from "../functions/dragdrop";

export default function CenterPanel() {
    const dispatch = useDispatch()
    return (
        <div  id="div1" className="centerPanel"  onDrop={(e) => {
            drop(e)
          }}
          onDragOver={(e) => {
            allowDrop(e)
          }}>
            
        </div>
    )
}
