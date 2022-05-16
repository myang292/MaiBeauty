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
            <div className='wrapper'>
                <br />
                <div className='products'>
                    <img src={selectBrows.photoUrl} alt='' />
                    <h3>{selectBrows.name}</h3>
                    <h3>${selectBrows.price}</h3>
                    <h3>{selectBrows.description}</h3>
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