
import { useState } from 'react'
// import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const signin = (props) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({
            username: '',
            password: '',
        })
        props.setUser(payload)
        props.setUserID(payload.id)
        props.setAuthenticated(true)
        props.setData({...props.data, id:payload.id})
        navigate('/')
    }

    return(
        <div className='SignIn'>
            <br />
            <h2>Sign In.</h2>
            <form className='signin' onSubmit={handleSubmit}>
                <div className='signInUsername'>
                    <input 
                        type='text' 
                        id='username' 
                        placeholder='Username' 
                        name='username' 
                        onChange={handleChange} 
                        value={formValues.username}
                        style={{ textAlign: 'center'}}
                    /> 
                    <br/>
                </div>
                <div className='signInPassword'>
                    <input 
                        type='password' 
                        id='password' 
                        placeholder='Password' 
                        name='password' 
                        onChange={handleChange} 
                        value={formValues.password}
                        style={{ textAlign: 'center'}}
                    /> 
                    <br/>
                </div>
                <button className='signInButton' type='submit' disabled={!formValues.username || !formValues.password}> Sign In </button>
            </form>
        </div>
    )
}

export default signin