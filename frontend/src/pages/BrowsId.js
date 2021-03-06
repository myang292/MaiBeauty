import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { useContext } from 'react'
// import { CartContext } from "../components/Cart";


const BrowsId = (props) => {
    
    let {id} = useParams()

    const [selectBrows, setBrows] = useState('')
    // const {cart, setCart} = useContext(CartContext)


    useEffect(() => {
        let selectBrows = props.brows.find(
            (brows) => brows._id === id
            )
            setBrows(selectBrows)
        }, [id, props.brows])


    // const addToCart = (value) => {
    //     setCart(value)
    // }

    if (selectBrows) {
        return(
            <div className='wrapperId'>
                <br />
                <div className='products'>
                    <h3>{selectBrows.name}</h3>
                    <img src={selectBrows.photoUrl} alt='' />
                    <p>${selectBrows.price}</p>
                    <p>{selectBrows.description}</p>
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

export default BrowsId