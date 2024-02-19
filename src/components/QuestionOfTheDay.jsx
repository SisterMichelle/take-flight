import { forwardRef } from "react";

const question = forwardRef(function QuestionOfTheDay({ userName }, journalPromptRef) {
    return <>
        <h3 className="my-10 font-extrabold text-2xl md:text-3xl lg:text-4xl text-sky-400">
            Journalling Prompt for {userName}
        </h3>
        <div ref={journalPromptRef} className="flex flex-col grow rounded-lg drop-shadow-lg m-4 p-4 bg-white w-2/3 justify-center">
            How is this the best thing that has ever happened to me?
        </div>
    </>
});

export default question;