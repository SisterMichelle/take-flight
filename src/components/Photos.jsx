import { useState, forwardRef } from "react";

import { PHOTOS } from "../data/photos.js";
import prevImg from "../assets/icons/prev.svg";
import nextImg from "../assets/icons/next.svg";

const photos = forwardRef(function Photos({_}, ref) {
    const [ currImg, setCurrImg ] = useState(0);
    
    function setPrevImage() {
        let prev = currImg - 1;
        if (prev < 0) {
            prev = PHOTOS.length - 1;
        }
        setCurrImg(prev);
    }

    function setNextImage() {
        let next = currImg + 1; 
        if (next >= PHOTOS.length) {
            next = 0;
        }
        setCurrImg(next);
    }

    return (
        <div className="relative grid grid-cols-3 h-[60vh] md:h-[90vh] overflow-y-hidden place-items-center bg-black rounded-2xl m-5">
            <div onClick={setPrevImage} className="z-20 absolute left-5 grow-0 shrink-0 w-8 h-8 bg-stone-700 hover:bg-cyan-400 dark:bg-stone-700 dark:hover:bg-sky-900 rounded-full cursor-pointer">
                <img src={prevImg} alt="Previous Photo" className="w-4 h-4 m-2" />
            </div>
            <ul ref={ref} className="grid col-span-3 overflow-y-hidden place-items-end lg:mx-40">
                {PHOTOS.map((photo, i) => 
                    <li key={i} className={currImg === i ? "": "hidden"}>
                        <h3 className="absolute top-10 left-10 z-30 text-2xl drop-shadow-xl text-white top-100">{photo.description}</h3>
                        <img className="rounded-2xl" src={photo.image} alt={photo.title} title={photo.description}/>
                    </li>
                )}
            </ul>
            <img src="./MLogo.svg" className="absolute z-10 opacity-10 rounded-full w-40 h-40" />
            <div onClick={setNextImage} className="absolute right-5 grow-0 shrink-0 w-8 h-8 bg-stone-700 hover:bg-cyan-400 dark:bg-stone-700 dark:hover:bg-sky-900 rounded-full cursor-pointer">
                <img src={nextImg} alt="Next Photo" className="w-4 h-4 m-2" />
            </div>
        </div>
    );
});

export default photos;