import React from "react";
import ReactPlayer from "react-player";
import './App.css';

const Video = ({ link }) => (
  <div className="Wrapper">
    <ReactPlayer width='90%' height='90%' className="Video" url={link} />
  </div>
);

export default Video;