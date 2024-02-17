import { useState, useLayoutEffect } from 'react';

import Menu from './components/Menu.jsx';
import Greeting from './components/Greeting.jsx';
import Footer from './components/Footer.jsx';
import QuoteOfTheDay from './components/QuoteOfTheDay.jsx';
import QuotesByAuthor from './components/QuotesByAuthor.jsx';
import Author from './components/Author.jsx';
import Sigrid from './components/Sigrid.jsx';

import './index.css';
import './App.css';

function App() {
  const [ authorId, setAuthorId ] = useState(null);
  const [ bgTheme, setBgTheme ] = useState();

  useLayoutEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
    {
      console.log("1");
      document.documentElement.classList.add("dark");
      document.body.classList.add("sunset");
      document.body.classList.remove("sunrise");
      localStorage.theme = "dark";
      setBgTheme("sunset");
    } 
    else 
    {
      console.log("2");
      document.documentElement.classList.remove("dark");
      document.body.classList.add("sunrise");
      document.body.classList.remove("sunset");
      localStorage.theme = "light";
      setBgTheme("sunrise");
    }
  });

  function handleBgToggle() {
    if (bgTheme === "sunrise") {
      
      console.log("3");
      document.body.classList.add("sunset");
      document.body.classList.remove("sunrise");
      document.documentElement.classList.add("dark");

      localStorage.theme = "dark";
      setBgTheme("sunset");
    }
    else {
      console.log("4");
      document.body.classList.add("sunrise");
      document.body.classList.remove("sunset");
      document.documentElement.classList.remove("dark");

      localStorage.theme = "light";
      setBgTheme("sunrise");
    }
  }

  let userName = "Michelle";
  const hours = new Date().getHours();
  const isMorning = hours > 4 && hours < 12;

  function gotoAuthorPage(id) {
    setAuthorId(id);
  }

  return <>
      <Menu isAuthor={authorId} setIsAuthor={setAuthorId} bgToggle={handleBgToggle} />
      <Greeting isMorning={isMorning} userName={userName} />
      <Sigrid />

      <div id="container" className="m-4 rounded-lg p-4 h-screen">
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
        <Footer />
      </div>
  </>
}

export default App;