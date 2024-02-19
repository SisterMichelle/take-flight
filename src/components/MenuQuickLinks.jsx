import DayNightToggle from './DayNightToggle.jsx';
import quote from "../assets/icons/quote.svg";
import question from "../assets/icons/question.svg";
import contact from "../assets/icons/at-sign.svg";

export default function({ handleSectionScroll, quoteOfTheDayRef, journalPromptRef, footerContactMeRef }) {
    const roundButton = "grow-0 w-8 h-8 p-2 my-2 bg-stone-700 hover:bg-cyan-400 dark:bg-stone-700 dark:hover:bg-sky-900 rounded-full cursor-all-scroll";
    
    return <>
        <div className="fixed my-4 left-4 md:left-8 z-10">
            <div className="relative mb-20">
                <DayNightToggle />
            </div>
            <div className={roundButton} onClick={() => handleSectionScroll(quoteOfTheDayRef)}>
                <img src={quote} className="w-4 h-4" alt="Quotes" />
            </div>
            <div className={roundButton} onClick={() => handleSectionScroll(journalPromptRef)}>
                <img src={question} className="w-4 h-4" alt="Journalling Prompt" />
            </div>
            <div className={roundButton} onClick={() => handleSectionScroll(footerContactMeRef)}>
                <img src={contact} className="w-4 h-4" alt="Contact Me" />
            </div>
        </div>
    </>
}