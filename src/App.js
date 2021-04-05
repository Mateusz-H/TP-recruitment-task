import React from "react";
import { LeftBar } from "./components/LeftBar/LeftBar";
import {TherapistsList} from "./components/TherapistsList/TherapistsList";
import {TopBar} from "./components/TopBar/TopBar";
import {SideBar} from "./components/SideBar/SideBar";

function App() {
  return (
    <div>
        <LeftBar />
        <TopBar/>
        <TherapistsList/>
        <SideBar/>
    </div>
  );
}

export default App;
