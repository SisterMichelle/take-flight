import { useRef, useEffect } from 'react';

import mlogo from '../../assets/logo/mlogo-extended';
import LottieInteractivity from '@lottiefiles/lottie-interactivity';

export default function InteractiveLogo({ toggleContactMe }) {
    const lottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
          LottieInteractivity.create({
            player: lottieRef.current.getLottie(),
            mode: 'scroll',
            actions: [
              {
                visibility: [0, 1.0],
                type: 'seek',
                frames: [0, 300],
              },
            ],
          });
        }
      }, []);
    
    return ( 
        <div>
            <lottie-player
                ref={lottieRef}
                src={mlogo}
                style={{ width: '400px', height: '400px' }}
            ></lottie-player>      
        </div>
    );
}