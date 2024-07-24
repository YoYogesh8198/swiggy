import React from 'react'

const Head = () => {
     const navItem = [
          {
               name: "Swiggy Corporate",
               image: <i className="fi mt-2 fi-br-briefcase "></i>
          },
          {
               name: "Search",
               image: <i className="fi mt-2 fi-br-search"></i>
          },
          {
               name: "Offers",
               image: <i className="fi mt-2 fi-br-badge-percent"></i>
          },
          {
               name: "Help",
               image: <i className="fi mt-2 fi-br-info"></i>
          },
          {
               name: "Sign In",
               image: <i className="fi mt-2 fi-rs-user"></i>
          },
          {
               name: "Cart",
               image: <i className="fi mt-2 fi-br-cart-shopping-fast"></i>
          },
     ]
     return (
          <div className='w-full shadow-md h-20 flex justify-center items-center'>
               <div className='  w-[95%] flex items-center justify-between'>
                    <div className='flex items-center '>
                         <img className='w-20 hover:scale-110 ease-in-out duration-500' src="public/Swiggylogo.png" alt="" />
                         <div className='flex items-center justify-center gap-3'>
                              <p className='cursor-pointer border-b-2 border-black hover:text-orange-500 hover:border-orange-500 font-bold'>Other</p>
                              <i className="fi fi-rs-angle-small-down mt-1  text-orange-500 text-2xl"></i>
                         </div>

                    </div>

                    <div className='flex justify-between gap-10'>
                         {
                              navItem.map((ele, ind) => {
                                   return (
                                        <div key={ind + 1} className='cursor-pointer flex items-center justify-center gap-2 text-gray-400 hover:text-orange-500 font-semibold'>
                                             <p className='mt-1'>{ele.image}</p>
                                             <p>{ele.name}</p>

                                        </div>
                                   )
                              })
                         }






                    </div>
               </div>
          </div>
     )
}

export default Head