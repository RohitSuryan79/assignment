import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="mainNav">
                <nav className="navbar">
                    <Link to={'/'} className="logo">
                        <img src="../../../../images/logo.png" alt="logo"/>

                    </Link>

                    <div className="navItem">
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                        </ul>

                    </div>
                </nav>

            </div>
        )
    }
}

export default Header;