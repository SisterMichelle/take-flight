import React from 'react';
import Lottie from 'react-lottie';
import pinkM from '../../assets/logo/mlogo-extended';

export default function MLogo({ toggleContactMe }) {      
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: pinkM,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    const interactivity = {
        mode: "cursor",
        actions: [
            {
                type: "hover",
                forceFlag: false
            }
        ]
    };

    return <>
        <div onClick={toggleContactMe} className="absolute left-4 top-5 cursor-pointer">
            <Lottie
                options={defaultOptions}
                width={50} 
                height={50} 
                interactivity={interactivity}
            />
        </div>
    </>
}