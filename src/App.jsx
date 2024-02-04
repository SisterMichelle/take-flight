import Menu from './components/Menu.jsx';
import Greeting from './components/Greeting.jsx';
import Footer from './components/Footer.jsx';
import Quotes from './components/Quotes.jsx';

import './index.css';
import './App.css';

function App() {
  const userName = "";
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  return <>
      <Menu />
      
      <div id="container" className="mx-auto w-4/5 h-screen">
        <Greeting isDayTime={isDayTime} userName={userName} />
        <Quotes />
      </div>
      
      <Footer />
  </>
}

export default App;