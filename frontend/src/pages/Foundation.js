import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Comment from '../components/Comment'

const Foundation = (props) => {

    let navigate = useNavigate()
    const nav = () => {
        navigate('/foundation/:id')
    }

    console.log(props)

    return(
        <div>
            
            <br />
            <br />
            <div>
                {props.foundation.map((foundation) => {
                    return(
                        <div>
                            {foundation.name}
                            <br />
                            <img src={foundation.photoUrl} alt='' />
                            {foundation.description}
                        </div>
                    )
                })}
            </div>

            <Comment />
        </div>
    )
}

export default Foundation