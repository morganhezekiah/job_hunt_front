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
                <button className="py-2 lg:my-6  my-2 rounded-md shadow-md w-24 text-sm text-white mx-auto bg-red-300 " style={{backgroundColor:'#666AF6'}}>LOGOUT</button>
            </div>
            <div className="md:flex mt-8 font-bold text-sm ml-3 mb-2 lg:ml-6">
                <h1 className="basis-1/3 ">COURSES</h1>
                <h1 className="basis-1/3 hidden md:block">Link</h1>
                <h1 className="basis-1/3 hidden md:flex justify-end mr-8">Time</h1>
            </div>
            <Courses  title={'Digital Marketing'} link={'https://www.googlemeet.com/file/O1Dg92oIuY30hcNwiB2'} time={'9:30am'}/>
            <Courses title={'Introduction to C++'} link={'https://www.googlemeet.com/file/O1Dg92oIuY30hcNwiB2'} time={'12:00pm'}/>
            <Courses title={'UIUX Principle'} link={'https://www.googlemeet.com/file/O1Dg92oIuY30hcNwiB2'} time={'8:00am'}/>
            <Courses title={'Photoshop 101'} link={'https://www.googlemeet.com/file/O1Dg92oIuY30hcNwiB2'} time={'11:00am'}/>
            <Courses title={'Content Writing'} link={'https://www.googlemeet.com/file/O1Dg92oIuY30hcNwiB2'} time={'8:00am'}/>
        </section>
    </div>
  )
}

export default Dashboard