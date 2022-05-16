import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { useContext } from 'react'
// import { CartContext } from "../components/Cart";


const BronzerId = (props) => {
    
    let {id} = useParams()

    const [selectBronzer, setBronzer] = useState('')
    // const {cart, setCart} = useContext(CartContext)

    useEffect(() => {
        let selectBronzer = props.bronzer.find(
            (bronzer) => bronzer._id === id
            )
            setBronzer(selectBronzer)
        }, [id, props.bronzer])

    // const addToCart = (value) => {
    //     setCart(value)
    // }

    // let Navigate = useNavigate()
    // console.log(selectBronzer)

    if (selectBronzer) {
        return(
            <div className='wrapperId'>
                <br />
                <div className='products'>
                    <h3>{selectBronzer.name}</h3>
                    <img src={selectBronzer.photoUrl} alt='' />
                    <h3>${selectBronzer.price}</h3>
                    <h3>{selectBronzer.description}</h3>
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

export default BronzerId