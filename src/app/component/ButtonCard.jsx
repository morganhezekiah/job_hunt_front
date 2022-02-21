import React from 'react';

const ButtonCard = () => {
    return <div className=" z-30 fixed mt-72 left-28 hidden">
        <ul className="bg-white mt-3 px-8  py-4 shadow-xl rounded-md">
            <li className="py-3 px-2 border-b-2 cursor-pointer"><span><i class="fas fa-newspaper mr-3" style={{color:'#666AF6'}}></i></span>Assignment</li>
            <li className="py-3 px-2 border-b-2 cursor-pointer"><span><i class="fas fa-copy mr-3" style={{color:'#666AF6'}}></i></span>Material</li>
            <li className="py-3 px-2 border-b-2 cursor-pointer"><span><i class="fas fa-question mr-3" style={{color:'#666AF6'}}></i>Question</span></li>
            <li className="py-3 px-2 cursor-pointer"><i class="fas fa-chalkboard mr-3" style={{color:'#666AF6'}}></i>Topic</li>
        </ul>
    </div>
}

export default ButtonCard