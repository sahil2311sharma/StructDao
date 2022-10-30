import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";


function GetData() { 
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
    <main>
      {
        console.log(user)
      }
      {
        user&& user.length === 0?<ClipLoader/>:(
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
        )
      }
    </main>
  );
}

export default GetData;