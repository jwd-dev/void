import * as React from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

function MyAudioFunction() {
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    console.log(blob)
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    audio.type =  "audio/wav";
    //document.body.appendChild(audio);
  };

  return (
    <div
    style={{
      position: 'relative',
      // border: '3px solid green',
      margin: '0',
      position: 'absolute',
      top: '80%',
      left: '50%',      
    }}
    >
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        downloadFileExtension="wav"
        // downloadOnSavePress="true"
      />
      {/* <br />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
      <br /> */}
    </div>
  )
}

export default MyAudioFunction;