import React from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import virtual from '../assets/images/62.svg'

const Auth = () => {
    return <div className="flex flex-col   mt-36 mx-16 sm:mx-32 md:flex-row md:mx-0 lg:px-12">
        <section className="bg-white  shadow-md basis-1/2 lg:basis-1/3 md:mx-12  lg:mx-24">
        <h1 className="my-3 mt-10 ml-5 font-semibold">REGISTER FOR AN ONLINE CLASS</h1>
        <Input label={'USERNAME'}/>
        <Input label={'EMAIL'}/>
        <Input label={'PASSWORD'}/>
        <Button/>
        </section>
        <section className="hidden md:block  md:mx-12 lg:mx-32 ">
            <img src={virtual} alt="tex" className="lg:h-96 "/>
        </section>
    </div>
}

export default Auth;