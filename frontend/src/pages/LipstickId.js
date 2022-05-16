import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'


const LipstickId = (props) => {
    
    let {id} = useParams()

    const [selectLipstick, setLipstick] = useState('')

    useEffect(() => {
        let selectLipstick = props.lipstick.find(
            (lipstick) => lipstick._id === id
            )
            setLipstick(selectLipstick)
        }, [])

    // let Navigate = useNavigate()

    if (selectLipstick) {
        return(
            <div className=''>
                <br />
                <img src={selectLipstick.photoUrl} alt='' />
                <h3>{selectLipstick.name}</h3>
                <h3>${selectLipstick.price}</h3>
                <h3>{selectLipstick.description}</h3>
                <br />
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        )

    } else {
        return ('Loading...')
    }
}

export default LipstickId