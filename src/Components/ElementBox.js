import React from 'react'
import './../styles/ElementBoxOne.css'

const ElementBox = (props) => {
  return (
    <div className='elementBoxMain'>
      <div className='spotlightMainOne'>
        <div className='makeCentre-left'>
            <div className='distSeperator'>
                <h1>{props.title}</h1>
                <h5>
                    {props.explanation}
                </h5>
                <h2>
                    {props.name}
                </h2>
            </div>
        </div>
        <div className='makeCentre'>
            <div className='spotlightImgBoxOne' style={{margin:"0px"}}>
                {props.type === "image"?
                (
                    <img src={props.url} className='spotImageOne' alt='APIImage'
                  />
                ):(
                    <img src={props.vid_url} className='spotImageOne' alt='APIImage'/>
                )
                }
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElementBox