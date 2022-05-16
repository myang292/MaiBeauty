
import { useNavigate } from 'react-router-dom'


const AllProducts = () => {

    let navigate = useNavigate()
    const face = () => {
        navigate(`/face`)
    }
    const eyes = () => {
        navigate(`/eyes`)
    }
    const lips = () => {
        navigate(`/lip`)
    }

    return(
        <div className='wrapperId'>
            <div className='productParent'>
                <div className='product1'>
                    <h3>Face</h3>
                    <img src='https://static.wixstatic.com/media/d8d143_c030875a175a42f38071cef15d485dff~mv2.jpg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Face-foundation.jpg' alt='' className='products' onClick={face}/>
                </div>
                <div className='product2'>
                    <h3>Eyes</h3>
                    <img src='https://static.wixstatic.com/media/d8d143_a69abe8740954d2295b802d35e27a4f1~mv2.jpg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Eyes-brow.jpg' alt='' className='products' onClick={eyes}/>
                </div>
                <div className='product3'>
                    <h3>Lips</h3>
                <img src='https://static.wixstatic.com/media/d8d143_f5f52a911e87403e95354ac46672ece4~mv2.jpg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Lips-lipstick.jpg' alt='' className='products' onClick={lips}/>
                </div>
                <div className='product4'>
                
                </div>
            </div> 
        </div> 
    )
}

export default AllProducts