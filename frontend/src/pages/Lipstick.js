import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Lipstick = (props) => {

    let navigate = useNavigate()
    const nav = (lipstick) => {
        navigate(`${lipstick._id}`)
    }

    console.log(props)

    return(
        <div>
            <div className='wrapper'>
                {props.lipstick.map((lipstick) => {
                    return(
                        <div className='products'>
                            {lipstick.name}
                            <br />
                            <img src={lipstick.photoUrl} alt='' onClick={() => nav(lipstick)} key={lipstick._id}/>
                            {lipstick.description}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Lipstick