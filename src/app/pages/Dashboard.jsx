import React, {useState} from 'react'
import Courses from '../component/Courses'
import ButtonCard from '../component/ButtonCard'
import wave from '../assets/images/waving-hand.png'
import MainModal from '../component/MainModal'
import Accordion from '../component/Accordion'
import InputModal from '../component/InputModal'

const Dashboard = () => {
  const [showButtonCard, setShowButtonCard] = useState(false) 
  return (
    <div className="">
        <h1 className="text-5xl ml-6 m-5">Owerri <span style={{color:'#666AF6'}}>JobHunt</span></h1>
        <section className='flex  lg:flex-row  my-5 mx-5 md:mx-10 md:my-10  rounded-md shadow-md' style={{backgroundColor:"#E8EEF3"}}>
            <section className="hidden lg:block  pt-44 ml-12">
                <ul className="bg-white shadow-md rounded-sm pl-4 w-48">
                    <li className="py-2 text-blue-700" >All topics</li>
                    <li className="py-2 cursor-pointer">Google Advertising </li>
                    <li className="py-2 cursor-pointer">Google Advertising</li>
                    <li className="py-2 cursor-pointer">Google Advertising</li>
                    <li className="py-3 cursor-pointer">Google Advertising</li>
                    <li className="py-3 cursor-pointer">Google Advertising</li>
                </ul>
            </section>
            <section>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center my-5'>
                    <h1 className="mr-3  lg:pt-12 lg:text-2xl"><span className="text-xl font-semibold mr-2 lg:text-4xl ">Hello</span>HenryTruth</h1>
                    <img src={wave} alt="text" className="w-8 lg:mt-12 lg:w-14"/>
                </div>
                <div className='lg:mb-10 mx-auto lg:mx-0'>
                    <button onClick={() => setShowButtonCard(prev => !prev)} className="py-2 lg:mt-16 lg:ml-14 text-white w-24  rounded-lg shadow-md mb-2 " style={{backgroundColor:'#666AF6'}}> + Create</button>
                </div>
                {showButtonCard && <ButtonCard/>}
                {/* <InputModal/> */}
            </div>
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
            </section>
        </section>
    </div>
  )
}

export default Dashboard