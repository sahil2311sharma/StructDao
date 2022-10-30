import React, { useEffect, useState } from "react";
import './../styles/Spotlight.css'
import Loader from "react-js-loader";
import SubCategories from "./SubCategories";


const Spotlight = () => {
    const [user, setUser] = useState([]);
    
    const fetchData = async () => {
    const currDay = new Date();
    const currDate = (currDay.getDate()-1).toString();
    const currMonth = (currDay.getMonth()+1).toString();
    const prevMonth = (currDay.getMonth()).toString();
    const currYear = currDay.getFullYear().toString();

    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date="+currYear+"-"+prevMonth+"-28&end_date="+currYear+"-"+currMonth+"-"+currDate+"&thumbs=true");
    const data = await response.json();
        return setUser(data);
    }

    useEffect(() => {
        fetchData();
    },[])
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
            <div>
            <div className='spotlightMain' style={{marginRight:"50px", marginLeft: "50px"}}>
            <div className='makeCentre-l'>
                <div style={{marginRight:"20px"}}>
                    <h1 className="reveal blue" style={{paddingLeft:"20px", paddingBottom:"10px", }}>{user[user.length-1].title}</h1>
                    <h5 className="reveal purple" style={{paddingLeft:"20px", paddingBottom:"10px", }}>
                        {user[user.length-1].explanation}
                    </h5>
                    <h2 className="reveal purple" style={{paddingLeft:"20px", marginBottom:"30px", }}>
                        {user[user.length-1].copyright}
                    </h2>
                </div>
            </div>
            <div className='makeCentre'>
                <div style={{margin:"50px ", backgroundColor:"#D9D9D9", height:"492px", padding:"2px", borderRadius: "20px" }}>
                    {user[user.length-1].media_type === "image"?
                    (
                        <img src={user[user.length-1].hdurl} style={{borderRadius:"20px", height:"488px", width:"400px"}}  className='spotImage'/>
                    ):(
                        <iframe style={{borderRadius:"20px", height:"488px", width:"400px"}}  className='spotImage video'
                            title='Youtube player'
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={user[user.length-1].url+"&autoplay=1&showinfo=0&controls=0&loop=1"}>
                        </iframe>
                    )
                    }
                </div>
            </div>
            </div>
            <SubCategories/>
            </div>
            )
        }
        </div>
    )
}

export default Spotlight