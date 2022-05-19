import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AddBronzer from '../components/AddBronzer'
import UpdateBronzer from '../components/UpdateBronzer'

const Bronzer = (props) => {

    let navigate = useNavigate()
    const nav = (bronzer) => {
        navigate(`${bronzer._id}`)
    }

    console.log(props)

    return(
        <div>
            <div className='title'>
                Bronzer
            </div>
            <div className='wrapperId'>
                {props.bronzer.map((bronzer) => {
                    return(
                        <div className='products'>
                            {bronzer.name}
                            <br />
                            <img src={bronzer.photoUrl} alt='' onClick={() => nav(bronzer)} key={bronzer._id}/>
                            {bronzer.description}
                        </div>
                    )
                })}
                <AddBronzer />
                <UpdateBronzer />
            </div>
        </div>
    )
}

export default Bronzer