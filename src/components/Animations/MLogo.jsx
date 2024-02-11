import React from 'react';
import Lottie from 'react-lottie';
import pinkM from '../../assets/logo/m_MLogo';

export default function MLogo({ toggleContactMe }) {      
    const defaultOptions = {
        autoplay: true,
        loop: false,
        animationData: pinkM,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    const interactivity = {
        mode: "scroll",
        actions: [
            {
                visibility: [0, 0.2],
                type: "stop",
                frames: [0]
            }
        ]
    };

    const style = {
        width:50,
        height:50
    }

    return <>
        <div onClick={toggleContactMe} className="absolute left-4 top-5 cursor-pointer">
            <Lottie
                options={defaultOptions}
                style={style}
                interactivity={interactivity}
            />
        </div>
    </>
}