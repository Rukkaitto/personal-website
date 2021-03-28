import React from 'react';
import './animations.css';

function App() {
  return (
    <div>
      <div className={"flex flex-row justify-center h-screen bg-black md:justify-end md:items-end"}>
          <div className={"flex flex-col justify-center w-36 md:mr-20 md:mb-8"}>
              <img className={"spinning"} src={"images/spinner/ren.png"} alt={"ren"}/>
              <img className={"spinning delay"} src={"images/spinner/takeyourtime.png"} alt={"take your time"}/>
          </div>
      </div>
    </div>
  );
}

export default App;
