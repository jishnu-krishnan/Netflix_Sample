import React from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {Orginals,Action,Horror,Comdey} from './urls'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Rowpost url={Orginals} title='Netflix Originals'/>
      <Rowpost url={Action} title='Actions' isSmall/>
      <Rowpost url={Horror} title='Horror' isSmall/>
      <Rowpost url={Comdey} title='Comdey' isSmall/>
    </div>
  );
}

export default App;
