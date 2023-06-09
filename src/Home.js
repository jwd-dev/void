import {useState, useEffect} from "react";
import AudioRecorder from "./AudioRecorder";
import {SpeakerBox} from "./components/speaker-box/speaker-box";
import {AppBar, Box, CircularProgress, IconButton, Toolbar} from "@mui/material";
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import MicIcon from '@mui/icons-material/Mic';
import {styled} from '@mui/material/styles';
import Fab from '@mui/material/Fab';


// const StyledFab = styled(Fab)({
//     position: 'absolute',
//     zIndex: 1,
//     top: -30,
//     left: 0,
//     right: 0,
//     margin: '0 auto',
// });
const Home = () => {
    const [isRecording, setIsRecording] = useState('false');
    let aAuthed = false;
    let bAuthed = false;
    let cAuthed = false;

    let isLoading = false;
    const toggleIsLoad = () => {
        isLoading = !isLoading;
    }
    return (
        <div className='home'>
            <Stack direction="row" spacing={2}>
                <Item>
                    {aAuthed?<SpeakerBox  authenticated name="Aman Ibrahim" image={"img_1.png"}/>:<SpeakerBox  name="Aman Ibrahim" image={"img_1.png"}/>}
                </Item>
                <Item>
                    {bAuthed?<SpeakerBox authenticated name="Jake Downie" image={"1655911424362.jpeg"} />:<SpeakerBox name="Jake Downie" image={"1655911424362.jpeg "}/>}
                </Item>
                <Item>
                    {cAuthed?<SpeakerBox authenticated  name="Jake Downie" image={"img_1.png"} />:<SpeakerBox name="Jake Downie" image={"img_1.png"}/>}
                </Item>
            </Stack>
            <br/>
            {isLoading ? <CircularProgress/> : <AudioRecorder toggleLoading={toggleIsLoad}/>}

        </div>

    );
}
export default Home;
