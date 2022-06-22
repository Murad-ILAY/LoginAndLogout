import React from 'react'
import Logo from '../assets/img/Vector.jpg'
import { NavLink, Link } from "react-router-dom"
import { useState } from 'react'

function Header() {

    const [hide, setHide] = useState(true)
    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload()
    }

    const handleAvatar = () => {
        setHide(!hide)
    }

    return (


        <div className="header">
            <div className="left">
                <img src={Logo} />
                <h1 className='white' id='logo'>Voypost</h1>
            </div>

            <div className="div">
                <Link className="navlink" to="/">Home</Link>
            </div>

            <div className="div">
                <Link className="navlink" to="product">Products</Link>
            </div>

            <div className='white avatar' onClick={handleAvatar}><h1>OP</h1>
                <div className={`logout ${hide ? "hide": ""}`} onClick={handleLogOut}>Logout</div>

            </div>

        </div>
    )
}

export default Header


// <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <button className="navbar-toggler" type='button'>
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>

        //             </ul>
        //             <form className="d-flex">
        //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button className="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </div>
        // </nav>