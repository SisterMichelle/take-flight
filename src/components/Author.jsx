import { useState, useEffect } from 'react';
import authorProfile from '../assets/authors/placeholder.jpg';

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

    return (
        <div className="flex flex-col mx-10">
            {
                loading ? 'Loading...' : 
                <>
                    <img className="w-20 h-30" src={authorProfile} alt="Author Profile" />
                    <p className="author-name">{author.authorName} - {author.authorNationality} {author.authorTitle}</p>
                    <div>{author.authorBio}</div>
                </> 
            }
        </div>
    );
}