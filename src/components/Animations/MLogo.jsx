import React from 'react';
import Lottie from 'react-lottie';
import pinkM from '../../assets/logo/mlogo-extended';

export default function MLogo() {      
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
        <div id="logo" className="grow-0 min-w-20 cursor-pointer bg-black w-20 h-20 m-4 pt-4 rounded-full">
            <Lottie
                options={defaultOptions}
                width={50} 
                height={50} 
                interactivity={interactivity}
            />
        </div>
    </>
}