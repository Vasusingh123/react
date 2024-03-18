import TextForm from './components/TextForm'
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
// import About from './components/About';
function App() {
   const [mode,setmode]=useState('light');
   const togglemode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
   }
  return (
   <> 
   <Navbar  mode={mode} togglemode={togglemode}/>
   <div className="container">
   <TextForm mode={mode} heading="Enter the text to analyze"/>
  
   </div>
   {/*<About/>*/}
   </>
  );
}

export default App;
