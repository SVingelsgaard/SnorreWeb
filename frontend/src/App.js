import './Styling/App.css';
import { useState, useEffect } from 'react';
import BattleBus from './Assets/Videos/BattleBuS_1.mp4';


const textStyles = {
  fontFamily: 'new order',
  textTransform: 'uppercase',
  color: 'white',
  fontSize: '10vw',
  textAlign: 'center',
  marginTop: '30vh',
  transition: 'width 2s',
  cursor: 'pointer',
  marginBottom: 0,
  fontWeight: 'bold'
};

const clickCountStyles = {
  textAlign: 'center',
  color: 'white',
  cursor: 'pointer'
}

const buttonStyles = {
  border: 0,
  backgroundColor: 'white',
  borderRadius: '100vw',
  fontSize:'2em',
  textAlign: 'center',
  padding: '.4em 1em',
  fontFamily: 'new order',
  cursor: 'pointer'
}

const videoStyles = {
  position: 'fixed',
  top: 0,
  zIndex: '-1000',
  cursor: 'pointer'
};

export default function App() {
  const [muted, setMuted] = useState(true);
  const handleClick = () => {
    setMuted(prev => prev === true ? false : true)
  }

  const [text, setText] = useState('Coming soon');
  const textChange = () => {
    const textArray = ['Coming soon', 'To town', 'Snorre Haugen', 'The man'];

    setText(prev => {
      let index;
      if (textArray[textArray.indexOf(prev) + 1]) {
        index = textArray.indexOf(prev) + 1;
      } else {
        index = 0;
      }

      return textArray[index];
    })
  }

  useEffect(() => {
    const interval = setInterval(textChange, 2000);

    return () => clearInterval(interval);
  }, [])

  const [clicks, setClicks] = useState(0);
  const handleClicks = () => {
    setClicks(prev => prev + 1)
  }
  
  const [muteUnMute, setMuteUnMute] = useState('Unmute video');
  useEffect(() => {
    
    if (muted === true) {
      setMuteUnMute('Unmute video');
    } else {
      setMuteUnMute('Mute video');
    }
  }, [muted])
   

  return (
    <div> 
      
  
      <h1 onClick={handleClicks} style={textStyles}>{text}</h1>
      <div onClick={handleClicks} style={{textAlign: 'center', cursor: 'pointer'}}>
        <button style={buttonStyles} onClick={handleClick}>{muteUnMute}</button>
      </div>
      <h2 onClick={handleClicks} style={clickCountStyles}>Click count: {clicks}</h2>
      
      
      <video onClick={handleClicks} style={videoStyles} autoPlay={"autoplay"} preLoad="auto" playInline loop muted={muted}>
        Does not support video
        <source src={BattleBus} type="video/mp4"/>
      </video>
    </div>
  );
}