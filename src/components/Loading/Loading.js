import React from "react";
import loadingImg from '../../resource/brainalive.png'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-image-container">
      <img className="heartbeat-loader" src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
