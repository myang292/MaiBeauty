import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { CartContext } from "../components/Cart";


const FoundationId = (props) => {
    
    let {id} = useParams()

    const [selectFoundation, setFoundation] = useState('')
    const {cart, setCart} = useContext(CartContext)


    useEffect(() => {
        let selectFoundation = props.foundation.find(
            (foundation) => foundation._id === id
            )
            setFoundation(selectFoundation)
        }, [id, props.foundation])

    const addToCart = (value) => {
        setCart(value)
    }

    // let Navigate = useNavigate()

    if (selectFoundation) {
        return(
            <div>
                <div className='wrapperId'>
                    <br />
                    <div className='products'>
                        <h3>{selectFoundation.name}</h3>
                        <img src={selectFoundation.photoUrl} alt='' />
                        <p>${selectFoundation.price}</p>
                        <p>{selectFoundation.description}</p>
                    </div>
                </div>
                    <br />
                    <div>
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>
            </div>
        )

    } else {
        return ('Loading...')
    }
}

export default FoundationId