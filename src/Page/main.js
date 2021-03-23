import React from "react";
import LeftPanel from "../component/LeftPanel";
import RightPanel from "../component/RightPanel";
import CenterPanel from "../component/CenterPanel";
import NavPanel from "../component/NavPanel";
export default function Main() {
  return (
    <>
    <NavPanel/>
      <div className="main">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
    </>
  );
}
