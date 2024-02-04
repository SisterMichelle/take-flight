import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';

import { QUOTES } from './data/quotes.js';
import Quotes from './components/Quotes.jsx';

import './index.css';
import './App.css';

function App() {
  return <>
      <Menu />
      <div id="container" className="mx-auto w-4/5 h-screen">
        {QUOTES.map((quote) => <Quotes key={quote.author} {...quote} />)}
      </div>
      <Footer />
  </>
}

export default App;