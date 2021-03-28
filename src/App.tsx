import React from 'react';
import './animations.css';

function App() {
  return (
    <div>
      <div className={"flex flex-row justify-center h-screen bg-black"}>
          <div className={"flex flex-col justify-center w-36"}>
              <img className={"spinning"} src={"images/spinner/ren.png"} alt={"ren"}/>
              <img className={"spinning delay"} src={"images/spinner/takeyourtime.png"} alt={"take your time"}/>
          </div>
      </div>
    </div>
  );
}

export default App;
