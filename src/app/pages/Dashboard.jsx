import React from 'react'
import Courses from '../component/Courses'
import wave from '../assets/images/waving-hand.png'

const Dashboard = () => {
  return (
    <div>
        <section className='h-screen my-5 mx-5 md:mx-10 md:my-10  rounded-md shadow-md' style={{backgroundColor:"#E8EEF3"}}>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex mx-auto lg:mx-0 lg:ml-5  my-4">
                    <h1 className="mx-2 mt-2 text-2xl font-semibold">Hello</h1>
                    <h6 className='mt-3 text-lg mx-2'>HenryTruth</h6>
                    <img src={wave} alt="text" className="w-10 mx-2"/>
                </div>
                <button className="py-2 lg:my-6 rounded-xl   my-2 rounded-md shadow-md w-24 text-sm  text-white mx-auto bg-red-300 " style={{backgroundColor:'#666AF6'}}>+ Create</button>
            </div>
        </section>
    </div>
  )
}

export default Dashboard