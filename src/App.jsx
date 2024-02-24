import { useState, useRef } from 'react';

import Menu from './components/Menu.jsx';
import MenuQuickLinks from './components/MenuQuickLinks.jsx';
import Welcome from './components/Welcome.jsx';
import QuoteOfTheDay from './components/QuoteOfTheDay.jsx';
import Author from './components/Author.jsx';
import JournallingPrompts from './components/JournallingPrompts.jsx';
import Photos from './components/Photos.jsx';
import Footer from './components/Footer.jsx';

import './index.css';
import './App.css';

function App() {
  let userName = "";
  const emotionRef = useRef();
  const quoteOfTheDayRef = useRef();
  const journallingPromptRef = useRef();
  const photosRef = useRef();
  const footerContactMeRef = useRef();
  const topRef = useRef();

  const [ authorId, setAuthorId ] = useState(null);

  function gotoAuthorPage(id) {
    setAuthorId(id);
  }

  function handleSectionScroll(ref) {
      ref.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
      });
  }

  return <>
    <Menu userName={userName} isAuthor={authorId} goHome={gotoAuthorPage} />

    <div className="flex h-screen">

        <div id="quick-links" className="basis-1/5 md:basis-1/12 my-20 min-w-max flex flex-col">
            <MenuQuickLinks isAuthor={authorId} handleSectionScroll={handleSectionScroll} emotionRef={emotionRef} quoteOfTheDayRef={quoteOfTheDayRef} journallingPromptRef={journallingPromptRef} photosRef={photosRef} footerContactMeRef={footerContactMeRef} topRef={topRef}/>
        </div>

        <div ref={topRef} className="basis-4/5 md:basis-11/12 my-32">

          {(authorId) ?
            <>
                <Author id={authorId} />
            </> 
            : 
            <>                
                <Welcome userName={userName} ref={emotionRef}/>
                <QuoteOfTheDay setAuthorPage={gotoAuthorPage} ref={quoteOfTheDayRef} />
                <JournallingPrompts id="prompts" ref={journallingPromptRef} />
                <Photos ref={photosRef} />
            </>
          }

          <Footer id="footer" ref={footerContactMeRef} />
        </div>

    </div>
  </>
}

export default App;