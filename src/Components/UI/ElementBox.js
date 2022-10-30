import React from 'react'

const ElementBox = (props) => {
  return (
    <div style={{height:"100%", display:"flex", alignItems:"center", justifyContent: "center"}}>
        {
            props.type === "image"?
            (
                <img src={props.url} style={{width: "100%", height: "100%", objectFit: "contain"}} alt="text"/>
            )
            :
            (  
                <img src={props.vid_url} style={{width: "100%", height: "100%", objectFit: "contain"}} alt="text"/>
            )
        }
    </div>
  )
}

export default ElementBox