
import { Link } from 'react-router-dom'

const SignIn = () => {

    return(
        <div>
            <header>
                <nav className='signin'>
                    <Link to='signin'>Sign In</Link>
                    &nbsp;
                    <Link to='cart'>Cart</Link>
                </nav>
            </header>
        </div>
    )
}

export default SignIn