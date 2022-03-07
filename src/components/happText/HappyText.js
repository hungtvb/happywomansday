import React, { useState } from 'react'
import Form from '../form/Form';
import "./style.scss"

const HappyText = () => {
  const [userName, setUserName] = useState("");
  const [userRelationship, setUserRelationship] = useState("");

  if(!userName){
    return <Form setUserName={setUserName} setUserRelationship={setUserRelationship}/>
  }
  return (
    <>
        <div className="text">
            <p>H</p>
            <p>A</p>
            <p>P</p>
            <p>P</p>
            <p>Y</p>
            <p>&nbsp;</p>
            <p>W</p>
            <p>O</p>
            <p>M</p>
            <p>A</p>
            <p>N</p>
            <p>'</p>
            <p>S</p>
            <p>&nbsp;</p>
            <p>D</p>
            <p>A</p>
            <p>Y</p>
        </div>
        <div className="heart">
          <p><span className="heart-icon">❤</span></p> 
          <p>Chúc {userRelationship} <span className="user-name">{userName}</span> 8/3 thật nhiều niềm vui và hạnh phúc!!!</p>
        </div>
    </>
  )
}

export default HappyText