import React from 'react'

const Input = ({label}) => {

    return <div className=" flex flex-col">
        <label className="text-black ml-5  mt-1 text-xs">{label}</label>
        
        {label === 'PASSWORD' ? <input className=" p-1 my-2 mx-5 rounded-sm text-black outline-none" type="password" style={{backgroundColor:'#E8EEF3'}}/> : <input className=" p-1 my-2 mx-5 rounded-sm text-black outline-none" style={{backgroundColor:'#E8EEF3'}}/>}
        
    </div>
}

export default Input;