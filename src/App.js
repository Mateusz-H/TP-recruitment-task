import React from "react";
import { LeftBar } from "./components/LeftBar/LeftBar";
import {TherapistsList} from "./components/TherapistsList/TherapistsList";
import {TopBar} from "./components/TopBar/TopBar";

function App() {
  return (
    <div>
        <LeftBar />
        <TopBar/>
        <TherapistsList/>
    </div>
  );
}

export default App;
