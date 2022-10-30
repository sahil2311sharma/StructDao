import React from 'react'
import Header from './Components/Header';
import GetData from './Components/GetData';
import Spotlight from './Components/Spotlight';
import SubCategories from './Components/SubCategories';
import Card from './Components/UI/Card'

import './styles/main.css';
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Spotlight/>
      {/* <Card/> */}
      
    </div>
  )
}

export default App