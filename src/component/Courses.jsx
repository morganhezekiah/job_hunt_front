import React, { useState } from 'react'

const Courses = ({title, link, time})=> {
    const [show, setShow] = useState(false)
  return  <div className="grid  grid-cols-2 md:flex text-sm font-semibold mt-1  py-3 shadow-md mx-1 bg-white lg:mx-6">
                <h1 className='ml-2 text-xs sm:text-sm basis-1/3'>{title}</h1>
                <a href="#" className="text-blue-800 basis-1/3 cursor-pointer hidden md:block">{link}</a>
                <h1 className='ml-2 text-xs sm:text-sm basis-1/3  justify-end mr-3 hidden md:flex'>{time}</h1>
                <i class="fa fa-caret-down text-black  cursor-pointer justify-self-end mr-2 sm:text-lg md:hidden" onClick={() => setShow(prev => !prev)}></i>
                {show ? <ul className="ml-2 text-xs sm:text-sm">
                    <li className="mt-2">Link</li>
                    <li><a href="#" className="text-blue-800">{link}</a></li>
                    <li className="mt-2">Time</li>
                    <li>{time}</li>
                </ul> : null}
            </div>
}

export default Courses