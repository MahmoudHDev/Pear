import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const loginURI = "http://localhost:9000/login"

const Login = () => {
    // set default values 
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })


    const navigate = useNavigate();


    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setUserInfo((values) => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(loginURI, userInfo)
                .then((response) => {
                    response.data.logged ? handleSuccess(response.data) : handleError(response.data)

                })
                .then((failure) => {
                    if (failure) {
                        console.log(failure);
                    }
                })
        } catch (err) {
            console.log(err);
        };
    };


    const handleSuccess = (res) => {
        navigate('/home', { state: res })
    };

    const handleError = (error) => {
        console.log("Error Occured");
        alert("Maybe your Email Or Password is incorrect");
    };


    return (
        <div>
            <form action='/login' method='POST' className='border py-5 px-4 w-75' onSubmit={handleSubmit}>
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
                        required
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
                        required
                    ></input>
                </div>
                <br></br>
                <div className='text-center'>
                    <button type='submit' className='btn btn-primary'>Login</button>
                </div>
            </form>
            <button className='btn' onClick={() => window.history.back()}>Back to home</button>
        </div>
    )
}
export default Login;
