import React from 'react';
import Lottie from 'react-lottie';

import pinkM from '../../assets/pink-m';

export default function MLogo() {    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        style: "width: 100px; height: 100px", 
        class: "transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 cursor-pointer",
        animationData: pinkM,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <div className="">
            <Lottie
                options={defaultOptions}
                height={100}
                width={100}
            />
        </div>
    );
}