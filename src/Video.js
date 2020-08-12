import React, { useRef, useState } from 'react'
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <h1>This might be a video</h1>
      <video className="video__player" 
      loop
      onClick={onVideoPress}
      ref={videoRef}
      src="">

      </video>
    </div>
  )
}

export default Video
