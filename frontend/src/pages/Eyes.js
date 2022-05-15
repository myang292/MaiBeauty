
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { useEffect, useState } from 'react';



const Eyes = (props) => {

    let navigate = useNavigate()
    const nav = () => {
        navigate('/brows')
    }


    return(
        <div className='typesParent'>
            <div className="types1">
                <img src='https://static.wixstatic.com/media/d8d143_a69abe8740954d2295b802d35e27a4f1~mv2.jpg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Eyes-brow.jpg' alt='' onClick={nav}/>
                <h3>Brows</h3>
            </div>
        </div>
    )
}

export default Eyes