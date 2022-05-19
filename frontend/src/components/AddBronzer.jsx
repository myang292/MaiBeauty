import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const AddBronzer = (props) => {

    const [update, setUpdate] = useState(false)

    const url = 'http://localhost:3001/api/addBronzer'
    const [data, setData] = useState({
        name:'',
        description:'',
        photoUrl:'',
        price:'',
    })
    function submit (e) {
        e.preventDefault()
        axios.post(url, {
            name: data.name,
            description: data.description,
            photoUrl: data.photoUrl,
            price: data.price,
        })
        navigate('/bronzer')
        window.location.reload(true)
        }
        
    function onChange(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    let navigate = useNavigate()
    

    return(

        <div className='add-options'>
            {update?
                <form onSubmit = { submit } >
                    <input type='text' id={'name'} name={'name'} placeholder={'Bronzer Shade'} onChange = {(e) => onChange(e)} />
                    <br />
                    <input type='text' id={'description'} name={'weidescriptionght'} placeholder={'Description'} onChange = {(e) => onChange(e)} />
                    <br />
                    <input type='text' id={'photoUrl'} name={'photoUrl'} placeholder={'Image URL'} onChange = {(e) => onChange(e)} />
                    <br />
                    <input type='price' id={'price'} name={'price'} placeholder={'Price'} onChange = {(e) => onChange(e)} />
                    <br />
                    <button className='types-search-button'>Add</button>
                </form>:
                <button onClick={() => setUpdate(true)}>Add a New Shade</button> 
            }
        </div>


    )
}


export default AddBronzer