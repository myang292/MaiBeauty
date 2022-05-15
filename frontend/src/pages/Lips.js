
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { useEffect, useState } from 'react';



const Lips = (props) => {

    let navigate = useNavigate()
    const nav = () => {
        navigate('/lipstick')
    }


    return(
        <div className='typesParent'>
            <div className="types1">
                <img src='https://static.wixstatic.com/media/d8d143_f5f52a911e87403e95354ac46672ece4~mv2.jpg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Lips-lipstick.jpg' alt='' onClick={nav}/>
                <h3>Lipstick</h3>
            </div>
        </div>
    )
}

export default Lips