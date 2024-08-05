import React from 'react'
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (<div>
        <h1>Main Page</h1>

        <ul className='d-flex w-100 justify-content-evenly'>
            <li style={{ listStyleType: "none" }} ><Link className='bg-light rounded text-dark px-2 py-2' to={'/login'} style={{ fontSize: "1.5rem", textDecoration: "none", fontWeight: "bolder" }}>Login</Link></li>
            <li style={{ listStyleType: "none" }}><Link className='bg-secondary rounded text-light px-2 py-2' to={'/register'} style={{ fontSize: "1.5rem", textDecoration: "none", fontWeight: "bolder" }}>Register</Link></li>
        </ul>

    </div>)
}
export default MainPage;