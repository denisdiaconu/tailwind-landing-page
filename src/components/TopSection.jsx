import React, { useRef, useState} from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import backgroundVideo from '../assets/backgroundVideo.mp4';
import backgroundLoad from '../assets/backgroundLoad.jpg'
import GraButton from './button/GraButton';

const TopSection = ({isMenu}) => {
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
        <video ref={videoRef} src={backgroundVideo} muted loop autoPlay playsInline poster={backgroundLoad}
        className='h-full w-full absolute -z-10 object-cover' />
        <div className={`flex flex-col justify-center items-center duration-500 w-full p-8 ${
            isVideoOn ? '' : 'bg-black/80'
        } ${isMenu ? 'opacity-20' : 'opacity-100'}`}>
            <h1 className='text-5xl lg:text-7xl'>Web 3.0</h1>
            <h1 className='mb-14 text-5xl lg:text-7xl'>
            The <span className='font-bold text-tBlue'>Future</span> Is Here</h1>
            <div className='flex gap12 justify-center items-center'>
                <GraButton className='w-40 mr-12' name='Get Lapage' />
                <GraButton className='w-40 hidden smm:flex smm:justify-center' name='Products' />
                {
                    isVideoOn ? (
                        <FaPauseCircle size={30} className='text-tBlue cursor-pointer duration-300 hover:scale-125 smm:ml-12' onClick={handlePause} />
                    ) : (
                        <FaPlayCircle size={30} className='text-tBlue cursor-pointer duration-300 hover:scale-125 smm:ml-12' onClick={handlePlay} />
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default TopSection