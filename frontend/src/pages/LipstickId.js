import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { useContext } from 'react'
// import { CartContext } from "../components/Cart";


const LipstickId = (props) => {
    
    let {id} = useParams()

    const [selectLipstick, setLipstick] = useState('')
    // const {cart, setCart} = useContext(CartContext)


    useEffect(() => {
        let selectLipstick = props.lipstick.find(
            (lipstick) => lipstick._id === id
            )
            setLipstick(selectLipstick)
        }, [id, props.lipstick])

    // const addToCart = (value) => {
    //     setCart(value)
    // }

    // let Navigate = useNavigate()

    if (selectLipstick) {
        return(
            <div className='wrapperId'>
                <br />
                <div className='products'>
                    <h3>{selectLipstick.name}</h3>
                    <img src={selectLipstick.photoUrl} alt='' />
                    <h3>${selectLipstick.price}</h3>
                    <h3>{selectLipstick.description}</h3>
                </div>
                <br />
                <div>
                    {/* <button onClick={addToCart}>Add to Cart</button> */}
                </div>
            </div>
        )

    } else {
        return ('Loading...')
    }
}

export default LipstickId