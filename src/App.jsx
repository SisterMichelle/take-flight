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
  let userName = "";
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  function gotoAuthorPage(id) {
    setAuthorPage(id);
  }

  return <>
      <Menu />
      <div id="container" className="relative mx-auto w-4/5 h-screen">
        {(authorPage) ? <Author id={authorPage} /> : <>
        
        <Greeting isDayTime={isDayTime} userName={userName} />
        <QuoteOfTheDay setAuthorPage={gotoAuthorPage} />
        </>}
      </div>

      <Footer />
  </>
}

export default App;