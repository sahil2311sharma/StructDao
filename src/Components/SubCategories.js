import React, { useState, useEffect } from 'react'
import './../styles/SubCategories.css'
import ClipLoader from "react-spinners/ClipLoader";

const SubCategories = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [checkClick,setCheckClick] = useState(0);
    const [user, setUser] = useState([]);
    
    var myAPI = "https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=";
    
    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return setUser(data);
        } 
        catch (error) {
            console.log(error);
        }
        setCheckClick(0);
    }

    useEffect(() => {
        fetchData(myAPI);
    },[])

    const startLoader = () =>{
        setCheckClick(1);
    }

    const startDateChangeHandler = (event) => {
        setStartDate(event.target.value);
    };
    const endDateChangeHandler = (event) => {
        setEndDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        myAPI = myAPI + startDate + "&end_date="+endDate+"&thumbs=true";
        fetchData(myAPI);
        setStartDate('');
        setEndDate('');
    };

  return (
    <div className='subCategories'>
      <h1>SUB CATEGORIES</h1>
      <br/>
      <h1 style={{fontStyle: "normal", fontSize: "30px", lineSeight: "36px", color: "#FFFFFF", fontFamily: 'Bruno Ace SC'}}>Select Duration</h1>

      <form onSubmit={submitHandler}>
            <div>
            <label>Start Date:</label>
            <input
                type='date'
                min='1019-01-01'
                max='2022-12-31'
                value={startDate}
                onChange={startDateChangeHandler}
            />
            
            <label>End Date:</label>
            <input
                type='date'
                min='1019-01-01'
                max='2022-12-31'
                value={endDate}
                onChange={endDateChangeHandler}
            />
            </div>
            
            <input type="submit" value="Submit" onClick={startLoader}/>
        </form>
        {
            user && user.length > 0?(
        user.map((data) => (
            data.media_type === "image"?
            (
                <img style={{height:"100px", width:"100px"}} src={data.url}/>
            )
            :
            (
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={data.url+"&autoplay=1&showinfo=0&controls=0&loop=1"}>
            </iframe>
            )
          ))
        ):(checkClick === 0?(<></>):(<ClipLoader/>))
        }
    </div>
  )
}

export default SubCategories