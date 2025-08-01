import {useState} from "react";
import {Link} from "react-router";
const loggedInUser = () =>{

    return true;
}

const Title= () => (
        <a href="/">
        <img className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" />
        </a>
    );

const Header=() => {
    const[isLoggedIn, setIsLoggedIn]=useState(false);
        return (
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {
            isLoggedIn ? <button onClick={ () => setIsLoggedIn(false)}>Logout</button>:<button onClick={ () => setIsLoggedIn(true) }>Login</button>
        }
            
            
        </div>
        );
    }
    export default Header;

