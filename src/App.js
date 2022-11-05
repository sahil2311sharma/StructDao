import React from 'react'
import Spotlight from './Components/Spotlight';
import { UseEffectScroll } from 'react-use-smooth-scroll'
import 'react-use-smooth-scroll/dist/index.css'


import './styles/main.css';
const App = () => {
  return (
    <div className='app'>
      <UseEffectScroll>
      <Spotlight/>
      </UseEffectScroll>
    </div>
  )
}

export default App