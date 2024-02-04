import React from 'react';
import Lottie from 'react-lottie';
import pinkM from '../../assets/pink-m';

export default function MLogo() {      
    const defaultOptions = {
        autoplay: true,
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
        <div className="fixed left-4 top-1">
            <Lottie
                options={defaultOptions}
                style={style}
                interactivity={interactivity}
            />
        </div>
    </>
}