import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Comment from '../components/Comment'

const Lipstick = (props) => {

    let navigate = useNavigate()
    const nav = (lipstick) => {
        navigate(`${lipstick._id}`)
    }

    console.log(props)

    return(
        <div>
            
            <br />
            <br />
            <div>
                {props.lipstick.map((lipstick) => {
                    return(
                        <div>
                            {lipstick.name}
                            <br />
                            <img src={lipstick.photoUrl} alt='' onClick={() => nav(lipstick)} key={lipstick._id}/>
                            {lipstick.description}
                        </div>
                    )
                })}
            </div>

            <Comment />
        </div>
    )
}

export default Lipstick