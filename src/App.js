import React, { useState } from 'react';

import logo from './logo.svg';

import './App.css';



function App() {
//                                                                
  const [leftName, setLeftName] = useState(["James", "Hasan", "Ayeb"]);

  const [rightName, setRightName] = useState(["Happy", "Super", "Nice"])

  const [leftBoxClickedItems, setLeftBoxClickedItems] = useState([false, false, false])

  const [rightBoxClickedItems, setRightBoxClickedItems] = useState([false, false, false])

  function leftBoxChecked(e, index) {
    let newState = [].concat(leftBoxClickedItems)
    newState[index] = !newState[index]
    //console.log(newState)
    setLeftBoxClickedItems(newState)
  }

  function rightBoxChecked(e, index) {
    console.log(index)
    let newState = [].concat(rightBoxClickedItems)
    //[]
    newState[index] = !newState[index]
    console.log(newState)
    setRightBoxClickedItems(newState)
  }

  function goRight() {
    let newNamesArray = []
    let leftSideArray = []
    let leftCheckBoxArray = [].concat(leftBoxClickedItems)
    let newLeftSideStates = []
    let newRightSideStates = [].concat(rightBoxClickedItems)

    for (let i = 0; i < leftBoxClickedItems.length; i++) {

      if (leftBoxClickedItems[i] == true) {
        newRightSideStates.push(false);
        newNamesArray.push(leftName[i])
      } else {
        newLeftSideStates.push(leftCheckBoxArray[i])
        leftSideArray.push(leftName[i])
      }
    }
    setRightName(rightName.concat(newNamesArray));
    setLeftName(leftSideArray);
    setLeftBoxClickedItems(newLeftSideStates)
    setRightBoxClickedItems(newRightSideStates)
  }
//-------------------------------------------------------------------------------------------------
  const goLeft = () => {
    let newNamesGoLeft = [];
    let rightSideArray = [];
    let rightCheckBoxArray = [].concat(rightBoxClickedItems)
    let newRightSideStates = []
    let newLeftSideStates = [].concat(leftBoxClickedItems)

    for (let i = 0; i < rightBoxClickedItems.length; i++) {
      if (rightBoxClickedItems[i] == true) {
        newNamesGoLeft.push(rightName[i]);
        newLeftSideStates.push(false);

      }
      else {
        rightSideArray.push(rightName[i]);
       newRightSideStates.push(rightCheckBoxArray[i]);
      }
    }
    setLeftName(leftName.concat(newNamesGoLeft));
    setRightName(rightSideArray);
    setLeftBoxClickedItems(newLeftSideStates);
    setRightBoxClickedItems(newRightSideStates)
  }



  return (



    <div className="App">

      <div style={{ display: "block", width: "500px" }}>

        <div style={{ float: "left", paddingLeft: "20px" }}>

          {leftName.map((it em, index) =>
            <div>
              <input type="checkbox" id={"l"+index} checked={leftBoxClickedItems[index]}
                key={index} onChange={(e) => { leftBoxChecked(e, index) }}></input>

              <label for={"l"+index}>{item}</label><br></br></div>
          )}
        </div>

        <div><button type="button" onClick={goRight}>Go to the Right</button></div>

        <div><button type="button" onClick={goLeft}>Go to the Left</button></div>



        <div style={{ float: "right", paddingRight: "20px" }}>

          {rightName.map((item, index) =>
            <div>
              <input type="checkbox" id = {index} checked={rightBoxClickedItems[index]}
                key={index} onChange={(e) => { rightBoxChecked(e, index) }}></input>

              <label for={index}>{item}</label><br></br></div>
          )}



        </div>

      </div>

    </div>

  );

}

export default App;