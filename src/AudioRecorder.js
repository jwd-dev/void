import { useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import axios from 'axios';
import MicIcon from '@mui/icons-material/Mic';
import {AppBar, Box, CircularProgress, IconButton, Toolbar} from "@mui/material";



    const sendReport = async (input, setDatFunct) => {
    try {
        const url = 'http://localhost:8000/urlpredict?url=' + input;
        const result = await axios.get(url);
        setDatFunct(result.data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

const fileUploadHandler = async (blob) => {
    if (!blob) {
        console.error('No blob provided');
        return;
    }

    const url = 'https://www.filestackapi.com/api/store/S3?key=AK8zkbmjtQZOOdUHVYnCFz';

    try {
        const response = await axios({
            method: 'post',
            url,
            data: blob,
            headers: { 'Content-Type': blob.type }
        });

        await sendReport(response.data.url);
    } catch (error) {
        console.error('Error uploading blob:', error);
    }
};



function MyAudioFunction(props) {
    const [bState, setBState] = useState(false);

    let buttonToggle = bState ? 'active' : 'inactive';

    const recordingToggle = () => {
        setBState(bState => !bState);
        if (recorderControls.isRecording) {
            recorderControls.stopRecording();
        } else {
            recorderControls.startRecording();
        }
    }
    const recorderControls = useAudioRecorder();
    const addAudioElement = async (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement('audio');
        console.log(url);
        audio.src = url;
        audio.controls = true;
        //send blob to aws s3 bucket
        await fileUploadHandler(blob).then((response) => {
            props.toggleLoading();

            }
        ).catch((error) => {
            console.log(error);
        });
    }

        return (
            <div style={{
              position: 'relative',
              // border: '3px solid green',
              margin: '0',
              position: 'absolute',
              top: '80%',
              left: '50%',      
            }}>
                <AudioRecorder
                    onRecordingComplete={(blob) => addAudioElement(blob)}
                    recorderControls={recorderControls}
                    classes={{
                        AudioRecorderClass: 'display-none',
                        AudioRecorderTimerClass: 'display-none',
                        AudioRecorderStatusClass: 'display-none',
                        AudioRecorderStartSaveClass: 'display-none',
                        AudioRecorderPauseResumeClass: 'display-none',
                        AudioRecorderDiscardClass: 'display-none',
                    }}
                />
                <br/>
                <div class={"area"}>
                <button onClick={recordingToggle} className={`button${buttonToggle}`}>
                  <MicIcon id={"transitions"}/>
                </button>
                </div>
                <br/>
            </div>
        )
}

export default MyAudioFunction;