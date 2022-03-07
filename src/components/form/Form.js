import React, { useState } from "react";
import "./style.scss";

const Form = ({setUserName, setUserRelationship}) => {

const [eyeWidth, setEyeWidth] = useState("");
const [eyeHeight, setEyeHeight] = useState("");
const [name, setName] = useState("");
const [relative, setRelative] = useState("chị");

const handleEyeMouseMove = (event) => {
  var dw = window.innerWidth / 15;
  var dh = window.innerHeight / 15;
  setEyeWidth(event.pageX/ dw);
  setEyeHeight(event.pageY/ dh);
}

const handleClick = () => {
    setUserName(name);
    setUserRelationship(relative);
}

return (
    <div className="container" onMouseMove={handleEyeMouseMove}>
      <div className="panda" >
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball" style={{width: eyeWidth, height: eyeHeight}}></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball" style={{width: eyeWidth, height: eyeHeight}}></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"> </div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>
      <form>
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1>Nhập thông tin của bạn</h1>
        <div className="form-group">
          <input required="required" className="form-control" value={name} onChange={e => setName(e.target.value)} />
          <label className="form-label">Tên của bạn</label>
        </div>
        <div className="form-group">
          <select required="required" type="select" className="form-control" value={relative} onChange={e => setRelative(e.target.value)}>
            <option value="chị">Chị</option>
            <option value="mẹ">Mẹ</option>
            <option value="em">Em</option>
            <option value="bạn">Bạn</option>
            <option value="cô">Cô</option>
            <option value="dì">Dì</option>
          </select>
          <label className="form-label">Mình có thể xưng hô với bạn bạn là gì?</label>
        </div>
        <button className="btn" onClick={handleClick}>Xác nhận</button>
      </form>
    </div>
  );
};

export default Form;
