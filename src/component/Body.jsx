import React, { useEffect, useState } from 'react'

const Body = () => {
     const [data, setData] = useState([]);
     async function fetchData() {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const result = await data.json();
          console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
          setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
     }
     useEffect(() => {
          fetchData()
     }, [])
     return (
          <div className='w-full '>

               <div className='w-[80%] mx-auto '>
                    <div className='m-1 flex items-center justify-between'>
                         <h1 className='text-2xl font-bold'>What's in your mind?</h1>
                         <div className='flex gap-2 justify-end'>
                              <div className='bg-gray-200 rounded-full '>
                              <i className="fi text-3xl fi-rr-arrow-circle-left"></i>
                              </div>
                              <div className='bg-gray-200 rounded-full'>
                              <i className="fi text-3xl fi-rr-arrow-circle-right"></i>
                              </div>
                         </div>
                    </div>
                    <div className='flex m-3 overflow-y-auto scrollbar-hide'>
                         {
                              data.map((ele) => (
                                   <img className='w-36' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${ele.imageId}`} alt="" />
                              ))
                         }
                    </div>
               </div>
          </div>
     )
}

export default Body