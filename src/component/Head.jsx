import React from 'react'

const Head = () => {
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
                         <div className='cursor-pointer flex items-center justify-center gap-2 hover:text-orange-500 font-semibold'>
                              <i className="fi mt-1 fi-br-briefcase"></i>
                              <p>Swiggy Corporate</p>
                         </div>
                         <div className='cursor-pointer flex items-center justify-center gap-2 hover:text-orange-500 font-semibold'>
                              <i className="fi mt-1 fi-br-search"></i>
                              <p>Search</p>
                         </div>
                         <div className='cursor-pointer flex items-center justify-center gap-2 hover:text-orange-500 font-semibold'>
                              <i className="fi mt-1 fi-br-badge-percent"></i>
                              <p>Offers</p>
                         </div>
                         <div className='cursor-pointer flex items-center justify-center gap-2 hover:text-orange-500 font-semibold'>
                              <i className="fi mt-1 fi-br-info"></i>
                              <p>Help</p>
                         </div>
                         <div className='cursor-pointer flex items-center justify-center gap-2 hover:text-orange-500 font-semibold'>
                              <i className="fi mt-1 fi-rs-user"></i>
                              <p>Sign In</p>
                         </div>
                         <div className='cursor-pointer flex items-center justify-center gap-2 hover:text-orange-500 font-semibold'>
                              <i className="fi mt-1 fi-br-cart-shopping-fast"></i>
                              <p>Cart</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Head