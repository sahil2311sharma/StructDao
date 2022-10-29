import React from 'react'
import Header from './Components/Header';
import GetData from './Components/GetData';
import Spotlight from './Components/Spotlight';
import './styles/main.css';
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Spotlight/>
      {/* <GetData/> */}
    </div>
  )
}

export default App