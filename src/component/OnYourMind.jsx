import React, { useEffect, useState } from 'react'

const OnYourMind = () => {
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

     console.log(value)
     function handleNext() {
          value >= 200 ? "" : setvalue((prev) => prev + 45)
     }
     function handlePrev() {
          value == 0 ? "" : setvalue((prev) => prev - 50)
     }
     return (
          <div className='border-b-2 border-black-500'>
               <div className='mt-5 flex justify-between '>
                    <h1 className='text-4xl font-bold'>What's in your mind?</h1>
                    <div className='flex gap-3'>
                         <div onClick={handlePrev} className={`cursor-pointer rounded-full w-9 h-9 flex justify-end ` + (value <= 0 ? "bg-gray-50" : "bg-gray-300")}>
                              <img width="90" height="90" className={"value <= 0 ? 'text-gray-200' : text-gray-800"} src="https://img.icons8.com/clouds/90/left.png" alt="left" />
                         </div>
                         <div onClick={handleNext} className={`bg-gray-200 cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` + (value >= 200 ? "bg-gray-50" : "bg-gray-300")}>
                              <img width="100" height="100" className={"value <= 0 ? 'text-gray-200' : 'text-gray-800'"} src="https://img.icons8.com/clouds/100/right.png" alt="right" />
                         </div>
                    </div>
               </div>
               <div style={{ translate: `-${value}%` }} className={'flex mt-3  duration-1000'}>
                    {
                         data.map((ele, ind) => (
                              <img key={ind + 1} className='w-36' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${ele.imageId}`} alt="" />
                         ))
                    }
               </div>
          </div>
     )
}

export default OnYourMind