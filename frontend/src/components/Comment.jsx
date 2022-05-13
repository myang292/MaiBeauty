import React, { useState } from 'react'
import Client from '../services/api'


const PostArticle = ({ userID }) => {
    
    const [blog, setBlog] = useState({
        name: "",
        comment: "",
    }) 

    const [response, setResponse] = useState("")

    const handleChange = (event) => {
        setBlog({...blog, [event.target.name]: event.target.value})
    }

    const setId = () => {
        setBlog({...blog})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setId()
        const res = await Client.post('/api/blog/create', blog)

        setBlog({
            name: "",
            comment: "",
        })

        setResponse(res.data.msg)
        setTimeout(() => {
            setResponse("")  
        }, 3000);
        
        window.location.reload(true)
    }

    return(
        <div>
            <p>{response}</p>
            <form onSubmit={handleSubmit}>
                <input type = 'text' name='title' placeholder = 'Name' className = 'articleTitle' onChange={handleChange} value={blog.title}/>
                <br />
                <br />
                <textarea name='article' placeholder='Comment' className='articleTextArea' onChange={handleChange} value={blog.article} />
                <br />
                <br />
                <div className = 'articlePostButton'>
                    <button className='button' type='post' onClick={setId}>Post</button>
                </div>
            </form>
        </div>
    )
}

export default PostArticle