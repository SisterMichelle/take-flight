import { useState } from 'react';

import Menu from './components/Menu.jsx';
import Greeting from './components/Greeting.jsx';
import Footer from './components/Footer.jsx';
import QuoteOfTheDay from './components/QuoteOfTheDay.jsx';
import Author from './components/Author.jsx';

import './index.css';
import './App.css';

function App() {
  const [authorPage, setAuthorPage] = useState();
  const [ bgTheme, setBgTheme ] = useState("sunrise");

  let userName = "Michelle";
  const hours = new Date().getHours();
  const isMorning = hours > 4 && hours < 12;

  function gotoAuthorPage(id) {
    setAuthorPage(id);
  }

  function handleBgToggle() {
    if (bgTheme === "sunrise") {
      setBgTheme("sunset");

      document.body.classList.add("sunset");
      document.body.classList.remove("sunrise");
    }
    else {
      document.body.classList.add("sunrise");
      document.body.classList.remove("sunset");
    }
  }

  return <>
      <Menu isAuthor={authorPage} bgToggle={handleBgToggle} />

      <div id="container" className="mx-auto h-screen">
        {(authorPage) ? <Author id={authorPage} /> : <>
          <Greeting isMorning={isMorning} userName={userName} />
          <QuoteOfTheDay setAuthorPage={gotoAuthorPage} />        
        </>}

      </div>

      <Footer />
  </>
}

export default App;