import { useState, useEffect } from "react";
import MyAudioFunction from "./AudioRecorder";

const Home = () => {        
    return (
    <div classname='home' style={{ alignContent: 'center'}}>
      <div classname='avatars' style={{ alignContent: 'center'}}>
        <img alt="Aman"
          src="https://media.discordapp.net/attachments/1107685796506517675/1108193575679819776/Screen_Shot_2022-09-22_at_8.12.57_AM.png"
          style={{
            width:'200px',
            borderRadius: '100%',
            alignContent: 'center'

          }}
        />
        <img alt="Jake"
          src="https://media.discordapp.net/attachments/1107685796506517675/1108193575679819776/Screen_Shot_2022-09-22_at_8.12.57_AM.png"
          style={{
            width:'200px',
            borderRadius: '100%',
            alignContent: 'center'

          }}
        />
        <img alt="Shafqat"
          src="https://media.discordapp.net/attachments/1107685796506517675/1108193575679819776/Screen_Shot_2022-09-22_at_8.12.57_AM.png"
          style={{
            width:'200px',
            borderRadius: '100%',
            alignContent: 'center'

          }}
          <img alt="Your Name Here"
          src="https://media.discordapp.net/attachments/1107685796506517675/1108193575679819776/Screen_Shot_2022-09-22_at_8.12.57_AM.png"
          style={{
            width:'200px',
            borderRadius: '100%',
            alignContent: 'center'

          }}
        />
      </div>
      <MyAudioFunction />
    </div>
    );
}
export default Home;
