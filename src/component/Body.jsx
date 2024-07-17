import React, { useEffect, useState } from 'react'

const Body = () => {
     const [data, setData] = useState([]);
     const [value, setvalue] = useState(0);
     async function fetchData() {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const result = await data.json();
          console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
          setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
     }
     useEffect(() => {
          fetchData()
     }, [])

     function handleNext(){
          
     }
     function handlePrev(){

     }
     return (
          <div className='w-full '>
               <div className='w-[75%] mx-auto mt-3 overflow-hidden'>
                    <div className='mt-5 flex justify-between'>
                         <h1 className='text-4xl font-bold'>What's in your mind?</h1>
                         <div className='flex gap-3'>
                              <div onClick={handlePrev} className='bg-gray-200 cursor-pointer rounded-full w-9 h-9 flex justify-end'>
                                   <i className="fi text-3xl mt-1 fi-rr-arrow-circle-left"></i>
                              </div>
                              <div onClick={handleNext} className='bg-gray-200 cursor-pointer rounded-full w-9 h-9 flex justify-end'>
                                   <i className="fi text-3xl mt-1 fi-rr-arrow-circle-right"></i>
                              </div>
                         </div>
                    </div>
                    <div className={'flex mt-3 -translate-x-[400px] duration-1000'}>
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