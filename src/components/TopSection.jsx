import React, { useRef, useState} from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import backgroundVideo from '../assets/backgroundVideo.mp4'

const TopSection = () => {
    const [isVideoOn, setIsVideoOn] = useState(true);
    const videoRef = useRef();

    const handlePause = () => {
        videoRef.current.pause();
        setIsVideoOn(false);
    }

    const handlePlay = () => {
        videoRef.current.play();
        setIsVideoOn(true);
    }

  return (
    <div className="flex text-center h-screen w-full justify-center items-end">
        <video ref={videoRef} src={backgroundVideo} muted loop
        className='h-full w-full absolute -z-10 object-cover' />
    </div>
  )
}

export default TopSection