import React, { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner'

import Header from "./Header";
import SpotTab from "./SpotTab";
import SubCategories from "./SubCategories";

const Spotlight = () => {
    const [user, setUser] = useState([]);
    
    const fetchData = async () => {
    const currDay = new Date();
    const currDate = (currDay.getDate()-1).toString();
    const currMonth = (currDay.getMonth()+1).toString();
    const prevMonth = (currDay.getMonth()).toString();
    const currYear = currDay.getFullYear().toString();
    const prevYear = (currDay.getFullYear()).toString();

    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date="+prevYear+"-"+currMonth+"-1&end_date="+currYear+"-"+currMonth+"-"+currDate+"&thumbs=true");
    const data = await response.json();
        return setUser(data);
    }

    useEffect(() => {
        fetchData();
    },[])
    return (
        <div>
        {
            user&& user.length === 0?
            (
            // <Loader type="spinner-circle" bgColor={"#FFFFFF"} title={"Loading Please Wait"} color={'#FFFFFF'} size={100} />
            <div className="myLoader">
                <Audio/>
                <h1>Loading</h1>
            </div>
            )
            :
            (
            <div>
                <Header />
                <div style={{marginLeft:"20px", marginRight:"20px"}}>
                    <div>
                        <SpotTab title={user[user.length-1].title}
                            explanation={user[user.length-1].explanation} 
                            name = {user[user.length-1].copyright}
                            type = {user[user.length-1].media_type}
                            hdurl = {user[user.length-1].hdurl}
                            url = {user[user.length-1].url}
                            vid_url = {user[user.length-1].thumbnail_url}
                        />
                    </div>
                    <SubCategories/>
                </div>
            </div>
            )
        }
        </div>
    )
}

export default Spotlight