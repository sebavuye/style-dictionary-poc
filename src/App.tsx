import React from "react";
import { ScssComponent } from "./components/scss-component/ScssComponent";
import { TsComponent } from "./components/ts-component/tsComponent";

function App() {
  return (
    <div className='app'>
      <ScssComponent />
      <TsComponent />
    </div>
  );
}

export default App;
