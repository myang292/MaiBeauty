import React, { useState } from 'react'
import axios from 'axios'

const UpdateBronzer = ({id}) => {
    
    const [update, setUpdate] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const [price, setPrice] = useState('')

    const updateOne = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/api/editBronzer/${id}`, {name, description, photoUrl, price})
        window.location.reload(true)
    }

    return(
        <div>
            {update?
                <form onSubmit={(e) => updateOne(e)}>
                    <input name='name' type='text' placeholder='Bronzer Shade' onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input name='description' type='text' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                    <br />
                    <input name='photoUrl' type='text' placeholder='Image URL' onChange={(e) => setPhotoUrl(e.target.value)} />
                    <br />
                    <input name='price' type='text' placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
                    <br />
                    <button>Update</button>
                </form>:
                <button onClick={() => setUpdate(true)}>Update</button> 
            }
        </div>
    )
}

export default UpdateBronzer