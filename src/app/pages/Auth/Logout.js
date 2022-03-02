import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DELETE_USER_SLUG } from '../../misc/helpers/authTokenManager';
import Loader from "../../misc/Loader";

const  Logout = ()=>{
    const navigate = useNavigate();

    useEffect( async ()=>{
        await DELETE_USER_SLUG();
        navigate("/users/login")
    }, [])
  return (
    <div>
        <Loader />
    </div>
  )
}

export default Logout