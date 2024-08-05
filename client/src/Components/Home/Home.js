import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Home = () => {

    const location = useLocation();

    // console.log(location.state.userData._id)
    const id = location.state.userData._id
    return (
        <div>
            <h1>Welcome Home</h1>

            <navbar>
                <ul>
                    <li><Link to={`/profile/:${id}`}>Profile</Link></li>
                    <li><Link to={'/'}>Main Page</Link></li>
                </ul>

            </navbar>


        </div>
    )
}

export default Home;
