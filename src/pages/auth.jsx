import React, {useState } from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import virtual from '../assets/images/62.svg'

const Auth = () => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return <div className="flex flex-col mt-36   md:flex-row md:mx-0 lg:px-12">
        <section className="bg-white  basis-1/2">
        <div className="shadow-lg w-72 mx-auto md:mx-12 lg:mx-auto lg:w-96 lg:mx-0 h-80 lg:h-96  lg:mt-12 ">
            <h1 className="ml-5 font-semibold py-2 lg:py-6">REGISTER FOR AN ONLINE CLASS</h1>
            <Input onChange={(e) => setUsername(e)} label={'USERNAME'}/>
            <Input onChange={(e) => setEmail(e)} label={'EMAIL'}/>
            <Input onChange={(e) => setPassword(e)} label={'PASSWORD'}/>
            <Button/>
        </div>
        </section>
        <section className="hidden md:block basis-1/2 ">
           <div className="lg:mt-14 xl:mt-0">
            <img src={virtual} alt="tex" className=""/>
           </div>
        </section>
    </div>
}

export default Auth;