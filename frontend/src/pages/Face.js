
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';



const Face = (props, foundation) => {


    // const [foundations, setFoundations] = useState()

    // const getFoundations = async() => {
    //     const foundation = await axios.get('http://localhost:8000/foundation')
    //     setFoundations(foundation.data)
    //     console.log(foundation)
    // }

    // useEffect(() => {
    //     getFoundations()
    //   }, [])

console.log(foundation)
console.log(props.foundation)

    return(
        <div className='typesParent'>
            <div className="types1">
                <img src='https://static.wixstatic.com/media/d8d143_c030875a175a42f38071cef15d485dff~mv2.jpg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Face-foundation.jpg' alt='' />
                <h3>Foundation</h3>
            </div>
            <div>
                {props.foundation.map((foundation) => {
                    return(
                        <div>
                            {foundation.name}
                        </div>
                    )
                })}
            </div>
            <div className="types2">
                <img src='https://static.wixstatic.com/media/d8d143_824dbf3d62ba47c0812045ed3205bb75~mv2.jpg/v1/fill/w_350,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Face-bronzer.jpg' alt='' />
                <h3>Bronzer</h3>
            </div>
            <div className="types3">

            </div>
            <div className="types4">

            </div>
        </div>
    )
}

export default Face