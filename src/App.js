import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { NameContext } from './context/NameContext';

function App() {
  const [isDark,setIsDark] = useState(false);
  return (
    <NameContext.Provider value="bbbbb">
      <div className="App">
        <Header isDark={isDark}/>
        <Main isDark={isDark}/>
        <Footer isDark={isDark} setIsDark={setIsDark}/>
      </div>
    </NameContext.Provider>
  );
}

export default App;
