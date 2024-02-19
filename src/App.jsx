import { useState, useRef } from 'react';

import Menu from './components/Menu.jsx';
import MenuQuickLinks from './components/MenuQuickLinks.jsx';
import Welcome from './components/Welcome.jsx';
import QuoteOfTheDay from './components/QuoteOfTheDay.jsx';
import QuestionOfTheDay from './components/QuestionOfTheDay.jsx';
import Footer from './components/Footer.jsx';
import Author from './components/Author.jsx';

import './index.css';
import './App.css';

function App() {
  let userName = "";
  const quoteOfTheDayRef = useRef();
  const journalPromptRef = useRef();
  const footerContactMeRef = useRef();

  const [ authorId, setAuthorId ] = useState(null);

  function gotoAuthorPage(id) {
    setAuthorId(id);
  }

  function handleSectionScroll(ref) {
    console.log(ref.current.className);
      ref.current.scrollIntoView({
          behavior: "smooth"
      });
  }

  return <>
    <Menu userName={userName} isAuthor={authorId} goHome={gotoAuthorPage} />

    <div className="flex h-screen">

        <div id="quick-links" className="basis-1/5 md:basis-1/12 my-20 min-w-max flex flex-col">
            <MenuQuickLinks handleSectionScroll={handleSectionScroll} quoteOfTheDayRef={quoteOfTheDayRef} journalPromptRef={journalPromptRef} footerContactMeRef={footerContactMeRef} />
        </div>

        <div className="basis-4/5 md:basis-11/12 my-32">

          {(authorId) ?
            <>
                <Author id={authorId} />
            </> 
            : 
            <>                
                <Welcome userName={userName} />
                <QuoteOfTheDay setAuthorPage={gotoAuthorPage} ref={quoteOfTheDayRef} />
                <QuestionOfTheDay userName={userName} ref={journalPromptRef} />
            </>
          }

          <Footer id="footer" ref={footerContactMeRef} />
        </div>

    </div>
  </>
}

export default App;