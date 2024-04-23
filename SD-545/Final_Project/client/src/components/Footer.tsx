import React, { useState } from 'react'
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';

type Props={
    source:string;
}

export default function Footer(props:Props) {
  const [isRepeatOne, setIsRepeatOne] = useState(false);
    const {source} = props

    const toggleRepeat=()=>{
      setIsRepeatOne(!isRepeatOne);

    }

  return (
    <div>
        <AudioPlayer style={{ marginLeft: '70px' }}
        autoPlay={true}
        src={`http://localhost:3000/${source}`}
         onPlay={e => console.log("onPlay")}
         customAdditionalControls={[
          <>
            {/* Repeat One icon */}
            {isRepeatOne ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-repeat-1"
                style={{ cursor: 'pointer' }}
                onClick={toggleRepeat}
              >
                <path d="M11 4v1.466a.25.25 0 0 0 .41.192l2.36-1.966a.25.25 0 0 0 0-.384l-2.36-1.966a.25.25 0 0 0-.41.192V3H5a5 5 0 0 0-4.48 7.223.5.5 0 0 0 .896-.446A4 4 0 0 1 5 4zm4.48 1.777a.5.5 0 0 0-.896.446A4 4 0 0 1 11 12H5.001v-1.466a.25.25 0 0 0-.41-.192l-2.36 1.966a.25.25 0 0 0 0 .384l2.36 1.966a.25.25 0 0 0 .41-.192V13h6a5 5 0 0 0 4.48-7.223Z"/>
                <path d="M9 5.5a.5.5 0 0 0-.854-.354l-1.75 1.75a.5.5 0 1 0 .708.708L8 6.707V10.5a.5.5 0 0 0 1 0z"/>
              </svg>
            ) : (
              /* Repeat All icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-repeat"
                style={{ cursor: 'pointer' }}
                onClick={toggleRepeat}
              >
                <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
              </svg>
            )}
      
            {/* Shuffle icon */}
            
          </>
        ]}
      
      />

   
    </div>
  )
}
