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

export default function Void(props) {
    const [ isClicked, setClick ] = useState(false);
    const [ fileNumber, setFileNumber ] = useState(0);
    const [counter, setCounter] = useState(0);


    const onButtonClick = () => {
        if (isClicked == false) {
            setClick(true)
        }
        let newIndex = counter ;
        setCounter(counter + 1);
        if(counter === 3){
            setCounter(0);
        }
        props.callbackFunc("Loading...")
        console.log(newIndex);
        setFileNumber(newIndex)
    }

    const onShip = async () => {
        const audio_file = audio[fileNumber]
        const audioLink = links[fileNumber]
        const url = "http://localhost:8000/urlpredict?url=" + audioLink;
        axios.get(url)
            .then(res => {
                const {data} = res.data
                props.callbackFunc(data.prediction_label)
                setClick(false);
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div style={{ alignContent: 'center', display:"flex", gap:15 }}>
            {!isClicked &&
                <Button onClick={onButtonClick} variant="contained">Generate Audio</Button>
            }
            {isClicked &&
                <div >
                    <audio
                        id="audio"
                        controls={true}
                        src={audio[fileNumber]}
                    />
                    <Button onClick={onShip} color="success" variant="contained">🚢 Identify</Button>
                </div>
            }
        </div>
    )
};