import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='cardMain rounded-corners-gradient-borders '>
        <div className='divCentre'>
        {
            props.type == "image"?
            (
                <img src={props.url} className='cardImage'/>
            )
            :
            (  
                <iframe style={{borderRadius:"20px", height:"488px", width:"400px"}}  className='spotImage video cardImage'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={props.url+"&autoplay=1&showinfo=0&controls=0&loop=1"}>
                </iframe>
            )
        }
        </div>
        
        <div className='cardTitle'>
            {props.title}
        </div>
        <div className='cardDate'>
            {props.date}
        </div>
    </div>
  )
}

export default Card