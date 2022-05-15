import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'


const BrowsId = (props) => {
    
    let {id} = useParams()

    const [selectBrows, setBrows] = useState('')

    useEffect(() => {
        let selectBrows = props.brows.find(
            (brows) => brows._id === id
            )
            setBrows(selectBrows)
        }, [])

    // let Navigate = useNavigate()

    if (selectBrows) {
        return(
            <div className=''>
                <br />
                <img src={selectBrows.photoUrl} alt='' />
                <h3>{selectBrows.name}</h3>
                <h3>{selectBrows.description}</h3>
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

export default BrowsId