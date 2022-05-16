import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Foundation = (props) => {

    let navigate = useNavigate()
    const nav = (foundation) => {
        navigate(`${foundation._id}`)
    }

    console.log(props)

    return(
        <div>
            <div>
                {props.foundation.map((foundation) => {
                    return(
                        <div>
                            {foundation.name}
                            <br />
                            <img src={foundation.photoUrl} alt='' onClick={() => nav(foundation)} key={foundation._id}/>
                            {foundation.description}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Foundation