import { forwardRef, useState, useEffect } from "react";
import prevImg from "../assets/icons/prev.svg";
import nextImg from "../assets/icons/next.svg";

// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};

const headers = { "Content-Type": "application/json" };

const prompt = forwardRef(function JournallingPrompts({ id }, JournallingPromptsRef) {
    const [ error, setError ] = useState(null);
    const [ prompts, setPrompts ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch("http://localhost/api/prompts/", { headers, method: "GET" })
          .then(checkStatus)
          .then(parseJSON)
          .then((data) => {
              setPrompts(data);
              setLoading(false);
          })
          .catch((error) => setError(error));
    }, []);

    if (error) {
        return <div>An error occured: {error.message}</div>
    }

    const [ currPrompt, setCurrPrompt ] = useState(0);
    
    function setPrevPrompt() {
        let prev = currPrompt - 1;
        if (prev < 0) {
            prev = prompts.length - 1;
        }
        setCurrPrompt(prev);
    }

    function setNextPrompt() {
        let next = currPrompt + 1; 
        if (next >= prompts.length) {
            next = 0;
        }
        setCurrPrompt(next);
    }

    return <>
        <h3 id={id} className="md:my-10 font-extrabold text-2xl md:text-3xl lg:text-4xl text-sky-400">
            Journalling Prompts
        </h3>
        <div ref={JournallingPromptsRef} className="flex flex-col grow rounded-lg drop-shadow-lg md:m-4 p-4 w-full md:w-2/3 justify-center">
            <div onClick={setPrevPrompt} className="z-20 absolute top-30 left-[10px] md:left-0 grow-0 shrink-0 w-8 h-8 bg-stone-700 hover:bg-cyan-400 dark:bg-stone-700 dark:hover:bg-sky-900 rounded-full cursor-pointer">
                <img src={prevImg} alt="Previous Prompt" className="w-4 h-4 m-2" />
            </div>
            {loading ? 'Loading...' : <>
                {prompts.map((prompt, i) => {
                    return (
                        <p key={i} className={(currPrompt === i) ? "bg-white rounded-full shadow-2xl min-h-min p-10 m-5 italic text-lg md:text-2xl lg:text-3xl text-black quoteblock" : "hidden"}>
                            {prompt.promptText}
                        </p>
                    );
                })}
            </>}
            <div onClick={setNextPrompt} className="absolute top-30 right-[10px] md:right-0 grow-0 shrink-0 w-8 h-8 bg-stone-700 hover:bg-cyan-400 dark:bg-stone-700 dark:hover:bg-sky-900 rounded-full cursor-pointer">
                <img src={nextImg} alt="Next Prompt" className="w-4 h-4 m-2" />
            </div>
        </div>
    </>
});

export default prompt;