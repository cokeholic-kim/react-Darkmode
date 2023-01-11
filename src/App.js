import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { DarkContext } from './context/DarkContext';
import { NameContext } from './context/NameContext';

function App() {
  const [isDark,setIsDark] = useState(false);
  return (
    <NameContext.Provider value="bbbbb">
      <DarkContext.Provider value={{isDark,setIsDark}}> {/*줄여쓴객체형태 isDark:isDark , setIsDark:setIsDark */}
      <div className="App">
        <Header/>
        <Main/>
        <Footer />
      </div>
      </DarkContext.Provider>
    </NameContext.Provider>
  );
}

export default App;
