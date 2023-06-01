import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PrivateRoutes({children}) {
    const navigate = useNavigate()

    const {currentUser} = useSelector(state => state);

    useEffect(()=>{
        if (!currentUser){
            navigate('/login')
        }
    },[])

    return (
        <>
            {currentUser ? children : null}  
        </>
    );
}

export default PrivateRoutes;