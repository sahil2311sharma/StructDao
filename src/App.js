import React from 'react'
import Header from './Components/Header';
import GetData from './Components/GetData';
import Spotlight from './Components/Spotlight';
import SubCategories from './Components/SubCategories';

import './styles/main.css';
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Spotlight/>
      
    </div>
  )
}

export default App