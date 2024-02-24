import DayNightToggle from './DayNightToggle.jsx';
import emotion from "../assets/icons/hearts.svg";
import quote from "../assets/icons/quote.svg";
import journal from "../assets/icons/pencil.svg";
import contact from "../assets/icons/at-sign.svg";
import photos from "../assets/icons/photos.svg";
import gototop from "../assets/icons/gototop.svg";

export default function({ isAuthor, handleSectionScroll, emotionRef, quoteOfTheDayRef, journallingPromptRef, photosRef, footerContactMeRef, topRef }) {
    const roundButton = "grow-0 w-8 h-8 p-2 my-2 bg-stone-700 hover:bg-cyan-400 dark:bg-stone-700 dark:hover:bg-sky-900 rounded-full cursor-pointer";
    
    return <>
        <div className="fixed my-4 left-4 md:left-8 z-10">
            <div className="relative mb-20">
                <DayNightToggle />
            </div>
            {!isAuthor && <>
                <div className={roundButton} onClick={() => handleSectionScroll(emotionRef)}>
                    <img src={emotion} className="w-4 h-4" alt="How are you feeling" />
                </div>
                <div className={roundButton} onClick={() => handleSectionScroll(quoteOfTheDayRef)}>
                    <img src={quote} className="w-4 h-4" alt="Quotes" />
                </div>
                <div className={roundButton} onClick={() => handleSectionScroll(journallingPromptRef)}>
                    <img src={journal} className="w-4 h-4" alt="Journalling Prompt" />
                </div>
                <div className={roundButton} onClick={() => handleSectionScroll(photosRef)}>
                    <img src={photos} className="w-4 h-4" alt="Photography" />
                </div>
            </>}

            <div className={roundButton} onClick={() => handleSectionScroll(footerContactMeRef)}>
                <img src={contact} className="w-4 h-4" alt="Contact Me" />
            </div>
            <div className={roundButton} onClick={() => handleSectionScroll(topRef)}>
                <img src={gototop} className="w-4 h-4" alt="Back to top" />
            </div>
        </div>
    </>
}