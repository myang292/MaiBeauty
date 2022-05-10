
import { Link } from 'react-router-dom'


const Nav = () => {

    return(
        <div>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                    &nbsp;
                    <Link to='products'>Products</Link>
                </nav>
            </header>
        </div>
    )
}

export default Nav