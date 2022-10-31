import React from 'react'
import './../styles/ElementBox.css'

const ElementBox = (props) => {
  return (
    <div className='elementBoxMain'>
        {
            props.type === "image"?
            (
                <img src={props.url} className="elementImage" alt="text"/>
            )
            :
            (  
                <img src={props.vid_url} className="elementImage" alt="text"/>
            )
        }
    </div>
  )
}

export default ElementBox