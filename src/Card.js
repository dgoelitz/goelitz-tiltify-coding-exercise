import React from 'react';
import './App.css';
import Video from './Video';

function Card(props) {
    const { launch } = props;
    return (
      <div className="Card">
        <Video link={launch.links.video_link} />
        <p>{launch.mission_name}</p>
      </div>
    );
}

export default Card;