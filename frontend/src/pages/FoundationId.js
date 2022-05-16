import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'


const FoundationId = (props) => {
    
    let {id} = useParams()

    const [selectFoundation, setFoundation] = useState('')

    useEffect(() => {
        let selectFoundation = props.foundation.find(
            (foundation) => foundation._id === id
            )
            setFoundation(selectFoundation)
        }, [])

    // let Navigate = useNavigate()

    if (selectFoundation) {
        return(
            <div className=''>
                <br />
                <img src={selectFoundation.photoUrl} alt='' />
                <h3>{selectFoundation.name}</h3>
                <h3>${selectFoundation.price}</h3>
                <h3>{selectFoundation.description}</h3>
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

export default FoundationId