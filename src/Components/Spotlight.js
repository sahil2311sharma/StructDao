import React, { useEffect, useState } from "react";
import './../styles/Spotlight.css'
import Loader from "react-js-loader";

import companyLogo from './../Images/spot.png';

const Spotlight = () => {
    const [user, setUser] = useState([]);
    
    const fetchData = async () => {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true");
    const data = await response.json();
        return setUser(data);
    }

    useEffect(() => {
        fetchData();
    })
    return (
        <div>
        {
            console.log(user)
        }
        {
            user&& user.length === 0?
            (
            <Loader type="spinner-circle" bgColor={"#FFFFFF"} title={"Loading Please Wait"} color={'#FFFFFF'} size={100} />)
            :
            (
            <div className='spotlightMain' style={{marginRight:"50px", marginLeft: "50px"}}>
            <div className='makeCentre-l'>
                <div style={{marginRight:"20px"}}>
                    <h1 style={{paddingLeft:"20px", paddingBottom:"10px", }}>{user[user.length-1].title}</h1>
                    <h5 style={{paddingLeft:"20px", paddingBottom:"10px", }}>
                        {user[user.length-1].explanation}
                    </h5>
                    <h2 style={{paddingLeft:"20px", marginBottom:"30px", }}>
                        {user[user.length-1].copyright}
                    </h2>

                </div>
            </div>
            <div className='makeCentre'>
                <div style={{margin:"50px ", backgroundColor:"#D9D9D9", height:"492px", padding:"2px", borderRadius: "20px" }}>
                    <img src={user[user.length-1].url} style={{borderRadius:"20px", height:"488px", width:"400px"}}  className='spotImage'/>
                </div>
            </div>
        </div>
            )
        }
        </div>
    )
}

export default Spotlight