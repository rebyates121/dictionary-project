import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="row Phonetic">
      <div className="col-4">{props.phonetic.text}</div>
      <div className="col-6">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
    </div>
  );
}
