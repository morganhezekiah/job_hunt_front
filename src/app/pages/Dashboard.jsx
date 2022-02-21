import React from 'react'
import Courses from '../component/Courses'
import ButtonCard from '../component/ButtonCard'
import wave from '../assets/images/waving-hand.png'
import MainModal from '../component/MainModal'
import Accordion from '../component/Accordion'

const Dashboard = () => {
  return (
    <div>
        <section className='h-screen my-5 mx-5 md:mx-10 md:my-10  rounded-md shadow-md' style={{backgroundColor:"#E8EEF3"}}>
            <div className='flex flex-col justify-center'>
                <div className='flex justify-center my-5'>
                    <h1 className="mr-3"><span className="text-xl font-semibold mr-2">Hello</span>HenryTruth</h1>
                    <img src={wave} alt="text" className="w-8"/>
                </div>
                <button className="py-2 text-white w-24 mx-auto rounded-lg shadow-md" style={{backgroundColor:'#666AF6'}}> + Create</button>
                <ButtonCard/>
                <Accordion/>
            </div>
        </section>
    </div>
  )
}

export default Dashboard