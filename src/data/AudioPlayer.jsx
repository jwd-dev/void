import React, { useState } from "react";

import ReactAudioPlayer from 'react-audio-player';
import { Button } from "@mui/base";

import audio from "./data";

export default function AudioPlayer(props) {
    const [ isClicked, setClick ] = useState(false);
    const [ fileNumber, setFileNumber ] = useState(0);

    const onButtonClick = () => {
        if (isClicked == false) {
            setClick(true)
        }
        let newIndex = Math.floor(Math.random() * 10) + 1;
        console.log('newIndex', newIndex)
        setFileNumber(newIndex)
    }

    console.log(isClicked)
    console.log(fileNumber)
    
    return (
        <div style={{ alignContent: 'center'}}>

            <Button onClick={onButtonClick} variant="contained">Generate Audio</Button>
            <br />
            <br />
            {isClicked &&
                <audio
                    controls
                    src={audio[fileNumber]}
                />
            }
        </div>
    )
};