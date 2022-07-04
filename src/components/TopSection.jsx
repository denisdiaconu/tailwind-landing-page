import React, { useRef, useState} from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import backgroundVideo from '../assets/backgroundVideo.mp4'
import GraButton from './button/GraButton';

const TopSection = ({isMenuOn}) => {
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
        <div className={`flex flex-col justify-center items-center duration-500 w-full p-8 ${
            isVideoOn ? '' : 'bg-black/80'
        } ${isMenuOn ? 'opacity-20' : 'opacity-100'}`}>
            <h1 className='text-5xl lg:text-7xl'>Web 3.0</h1>
            <h1 className='mb-14 text-5xl lg:text-7xl'>
            The <span className='font-bold text-tBlue'>Future</span> Is Here</h1>
            <div className='flex flex-row justify-center items-center'>
                <GraButton className='w-40' name='Get Lapage' />
                <GraButton className='mx-12 w-40' name='Products' />
                {
                    isVideoOn ? (
                        <FaPauseCircle size={30} />
                    ) : (
                        <FaPlayCircle size={30} />
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default TopSection