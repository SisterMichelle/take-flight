import { useState, useEffect } from 'react';

import QuotesByAuthor from '../components/QuotesByAuthor.jsx';
import profile from '../assets/authors/placeholder.jpg';

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

export default function Author({ id }) {
    const [ error, setError ] = useState(null);
    const [ author, setAuthor ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch(`http://localhost/api/authors/?author_id=${id}`, { headers, method: "GET" })
          .then(checkStatus)
          .then(parseJSON)
          .then((author) => {
              setAuthor(author);
              setLoading(false);
          })
          .catch((error) => setError(error));
    }, []);

    if (error) {
        return <div>An error occured: {error.message}</div>
    }

    return <>
            {loading ? 'Loading...' : 
            <>  
            <div className="flex justify-center gap-4">
                <div className="flex flex-wrap gap-4 justify-items-center items-baseline">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold min-w-max dark:text-white">{author.authorName}</h3>
                    <p className="uppercase text-xs md:text-sm lg:text-2xl dark:text-white">{author.authorNationality} {author.authorTitle}</p>
                </div>
            </div>

            <QuotesByAuthor authorId={id} />
            
            <div className="flex flex-col grow rounded-lg drop-shadow-lg p-2 m-4 bg-white text-sm lg:text-lg p-4">
                {author.authorBio}
            </div>
            </> 
            }
    </>
}