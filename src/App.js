import React from 'react'
import Header from './Components/Header';
import Spotlight from './Components/Spotlight';


import './styles/main.css';
const App = () => {
  return (
    <div className='app'>
      <Header />
      <Spotlight/>
    </div>
  )
}

export default App