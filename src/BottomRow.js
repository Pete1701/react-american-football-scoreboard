import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const downNum = 1;
  const [down, setDown] = useState(downNum);

  const quarterNum = 1;
  const [quarter, setQuarter] = useState(quarterNum);

  const togoNum = 10;
  const [togo, setTogo] = useState(togoNum);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="downButton__number" onClick={() => setDown(down + 1)}>DOWN</button>
        <button onClick={() => setDown(1)}>RESET</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{togo}</div>        
        <button className="togoButton__number" onClick={() => setTogo(togo - 1)}>TO GO</button>
        <button onClick={() => setTogo(9)}>RESET</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>        
        <button className="quarterButton__number" onClick={() => setQuarter(quarter + 1)}>QUARTER</button>
        <button onClick={() => setQuarter(1)}>RESET</button>    
      </div>
    </div>
  );
};

export default BottomRow;