import { forwardRef, useState, useEffect } from "react";

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

          console.log(prompts);
    }, []);

    if (error) {
        return <div>An error occured: {error.message}</div>
    }
    
    return <>
        <h3 id={id} className="my-10 font-extrabold text-2xl md:text-3xl lg:text-4xl text-sky-400">
            Journalling Prompts
        </h3>
        <div ref={JournallingPromptsRef} className="flex flex-col grow rounded-lg drop-shadow-lg m-4 p-4 bg-white w-2/3 justify-center">
            {loading ? 'Loading...' : <>
                {prompts.map((prompt, i) => {
                    return (
                        <p key={i}>{prompt.promptText}</p>
                    );
                })}
            </>}
        </div>
    </>
});

export default prompt;