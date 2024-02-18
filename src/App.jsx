import { useState } from 'react';

import Menu from './components/Menu.jsx';
import Emotion from './components/Emotion.jsx';
import Footer from './components/Footer.jsx';
import QuoteOfTheDay from './components/QuoteOfTheDay.jsx';
import QuotesByAuthor from './components/QuotesByAuthor.jsx';
import Author from './components/Author.jsx';

import './index.css';
import './App.css';

function App() {
  let userName = "Michelle";
  const hours = new Date().getHours();
  const isMorning = hours > 4 && hours < 12;
  const [ authorId, setAuthorId ] = useState(null);

  function gotoAuthorPage(id) {
    setAuthorId(id);
  }

  return (
    <div className="flex bg- flex-col justify-between h-screen">
        <Menu isMorning={isMorning} userName={userName} isAuthor={authorId} setIsAuthor={setAuthorId} />

        <div id="welcome" className="flex flex-col grow relative rounded-lg drop-shadow-lg m-4 p-4 bg-white opacity-10">
          <Emotion />
        </div>

        <div className="flex flex-col grow rounded-lg drop-shadow-lg m-4 p-4 bg-white opacity-30">
          {(authorId) ?
            <>
              <Author id={authorId} />
              <QuotesByAuthor authorId={authorId} />
            </> 
            :
            <>
              <QuoteOfTheDay setAuthorPage={gotoAuthorPage} />     
            </>
          }
        </div>
        <Footer />
    </div>
  );
}

export default App;