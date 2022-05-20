import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AddBronzer from '../components/AddBronzer'
import UpdateBronzer from '../components/UpdateBronzer'

const Bronzer = (props) => {

    let navigate = useNavigate()
    const nav = (bronzer) => {
        navigate(`${bronzer._id}`)
    }

    const deleteOne = async (bronzer) => {
        await axios.delete(`http://localhost:3001/api/deleteBronzer/${bronzer._id}`)
        navigate('/bronzer')
        window.location.reload(true)
    }

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
                            {bronzer.price}
                            <br />
                            {bronzer.description}
                            <br />
                            <button key={bronzer._id} onClick={() => deleteOne(bronzer)}>Delete</button>
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