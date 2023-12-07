import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-nav">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar