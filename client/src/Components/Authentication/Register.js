import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {

    const [userInfo, setUserInfo] = useState({

        fName: "",
        lName: "",
        email: "",
        password: "",
        age: 0
    })

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setUserInfo(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            await axios.post('http://localhost:9000/register', userInfo)
                .then((response) => {
                    // handle success
                    console.log(response);
                    // Data --> Object comes from the server: 
                    console.log(response.data);
                    // Status:
                    console.log(response.status);

                })
                .then((error) => {
                    if (error) {
                        console.log(error);
                    }
                })

        } catch (err) {
            console.log(err)
        }

        console.log(userInfo)
    };

    return (
        <div>
            <h1>Login Page</h1>
            <br></br>

            <form action='/login' method='POST' className='border py-5 px-4 w-75' onSubmit={handleSubmit}>
                <div className='input-group' >
                    <label className='form-label mx-2' for="fname">First Name</label>
                    <input
                        id='fname'
                        className="form-control rounded"
                        type='text'
                        aria-describedby="f-name"
                        name='fName'
                        placeholder='John'
                        value={userInfo.fName || ""}
                        onChange={handleChange}
                    ></input>
                </div>
                <br></br>
                <div className='input-group' >
                    <label className='form-label mx-2' for="lname">Last Name</label>
                    <input
                        id='lname'
                        className="form-control rounded"
                        type='text'
                        aria-describedby="l-name"
                        name='lName'
                        placeholder='Smith'
                        value={userInfo.lName || ""}
                        onChange={handleChange}
                    ></input>
                </div>
                <br></br>
                <div className='input-group' >
                    <label className='form-label mx-2' for="age">Age</label>
                    <input
                        id='age'
                        className="form-control rounded"
                        type='number'
                        aria-describedby="age"
                        name='age'
                        placeholder='23'
                        value={userInfo.age || ""}
                        onChange={handleChange}
                    ></input>
                </div>
                <br></br>
                <div className='input-group' >
                    <label className='form-label mx-2' for="email">Email</label>
                    <input
                        id='email'
                        className="form-control rounded"
                        type='email'
                        aria-describedby="email"
                        name='email'
                        placeholder='example@domain.com'
                        value={userInfo.email || ""}
                        onChange={handleChange}
                    ></input>
                </div>

                <br></br>
                <div className='input-group' >
                    <label className='form-label mx-2' for="password">Password</label>
                    <input
                        placeholder='Password'
                        id='password'
                        className="form-control rounded"
                        type='password'
                        aria-describedby="password"
                        name='password'
                        value={userInfo.password || ""}
                        onChange={handleChange}
                    ></input>
                </div>
                <br></br>
                <div className='input-group' >
                    <label className='form-label mx-2' for="gender">Gender</label>
                    <input
                        placeholder='gender'
                        id='gender'
                        className="form-control rounded"
                        type='text'
                        aria-describedby="gender"
                        name='gender'
                        value={userInfo.gender || ""}
                        onChange={handleChange}
                    ></input>
                </div>
                <br></br>
                <div className='text-center'>
                    <button type='submit' className='btn btn-primary'>Register</button>
                </div>
            </form>

            <button className='btn' onClick={() => window.history.back()}>Back to home</button>
        </div>

    )
}
export default Register;
