import React from 'react';
import InputModal from './InputModal';

const ButtonCard = () => {
    return <div className=" z-30 flex justify-center fixed ml-44 sm:ml-60 mt-80 lg:mt-28">
        <ul className="bg-white mt-3 px-8  py-4 shadow-xl rounded-md mx-auto">
            <li className="py-3 px-2 border-b-2 cursor-pointer"><span><i class="fas fa-newspaper mr-3" style={{color:'#666AF6'}}></i></span><InputModal createAble={'Assignment'}/></li>
            <li className="py-3 px-2 border-b-2 cursor-pointer"><span><i class="fas fa-copy mr-3" style={{color:'#666AF6'}}></i></span><InputModal createAble={'Material'}/></li>
            <li className="py-3 px-2 border-b-2 cursor-pointer"><span><i class="fas fa-question mr-3" style={{color:'#666AF6'}}></i><InputModal createAble={'Question'}/></span></li>
            <li className="py-3 px-2 cursor-pointer"><i class="fas fa-chalkboard mr-3" style={{color:'#666AF6'}}></i><InputModal createAble={'Topic'}/></li>
        </ul>
    </div>
}

export default ButtonCard