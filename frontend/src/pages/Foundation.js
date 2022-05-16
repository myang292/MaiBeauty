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
            <div className='title'>
                Foundation
            </div>
            <div className='wrapperId'>
                {props.foundation.map((foundation) => {
                    return(
                        <div className='products'>
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