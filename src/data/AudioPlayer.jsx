import React, { useState } from "react";

import { Button } from "@mui/material";
import axios from "axios";


import { audio, links } from "./data";


const sendReport = async (input) => {
    try {
      const url = "http://localhost:8000/urlpredict?url=" + input;
      const result = await axios.get(url);
      const {data} = result.data
      console.log(data.prediction_label)
    //   setDatFunct(result.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

export default function AudioPlayer(props) {
    const [ isClicked, setClick ] = useState(false);
    const [ fileNumber, setFileNumber ] = useState(0);
    const [ identity, setIdentity ] = useState(null)

    const onButtonClick = () => {
        if (isClicked == false) {
            setClick(true)
        }
        let newIndex = Math.floor(Math.random() * 10) + 1;
        setFileNumber(newIndex)
    }

    const onShip = async () => {
        const audio_file = audio[fileNumber]
        const audioLink = links[fileNumber]
        const url = "http://localhost:8000/urlpredict?url=" + audioLink;
        axios.get(url)
            .then(res => {
                const {data} = res.data
                setIdentity(data.prediction_label)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div style={{ alignContent: 'center'}}>

            <Button onClick={onButtonClick} variant="contained">Generate Audio</Button>
            <br />
            <br />
            {isClicked &&
                <div>
                    <audio
                        id="audio"
                        controls
                        src={audio[fileNumber]}
                    />
                        <br />
                        <br />

                    <Button onClick={onShip} color="success" variant="contained">🚢 Ship it</Button>
                    <p>{identity}</p>
                </div>
            }
        </div>
    )
};