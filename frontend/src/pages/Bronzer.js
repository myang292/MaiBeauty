import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Bronzer = (props) => {

    let navigate = useNavigate()
    const nav = (bronzer) => {
        navigate(`${bronzer._id}`)
    }

    console.log(props)

    return(
        <div>
            
            <br />
            <br />
            <div>
                {props.bronzer.map((bronzer) => {
                    return(
                        <div>
                            {bronzer.name}
                            <br />
                            <img src={bronzer.photoUrl} alt='' onClick={() => nav(bronzer)} key={bronzer._id}/>
                            {bronzer.description}
                        </div>
                    )
                })}
            </div>
            <br />
            <br />
        </div>
    )
}

export default Bronzer