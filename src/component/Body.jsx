import React, { useEffect, useState } from 'react'

const Body = () => {
     const [data, setData] = useState([]);
     async function fetchData() {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const result = await data.json();
          console.log(result?.data);
     }
     useEffect(()=>{
          fetchData()
     },[])
     return (
          <div className='w-full '>
               <div className='w-[80%] mx-auto'>div</div>
          </div>
     )
}

export default Body