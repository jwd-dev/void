import { useState, useEffect } from "react";
import MyAudioFunction from "./AudioRecorder";



const Home = () => {
    const [name, setName] = useState('mario');

        
    return (
    <div>      
      <MyAudioFunction />
    </div>
    );
}
export default Home;
