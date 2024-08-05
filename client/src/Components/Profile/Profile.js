import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Link, Outlet, useParams } from 'react-router-dom';
import $ from 'jquery';
import Posts from './Posts';
import './css/profileStyle.css';


const profileURI = 'http://localhost:9000/profile';


const Profile = () => {
    const { id } = useParams();
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.value !== "") {
            setInputValue(e.target.value);
        };


    }

    const [profileInfo, setProfileInfo] = useState({
        fName: "",
        lName: "",
        age: 0,
        img: "",
        defImg: ""
    });

    useEffect(() => {
        try {
            axios.post(profileURI, id)
                .then((res) => {
                    res.data.success ? setProfileInfo(res.data.res,) : console.log("Error");
                })
                .then((failure) => {
                    if (failure) {
                        console.log(failure)
                    };
                })
        } catch (er) {
            console.log(er)
        }

        console.log("Do something");
    }, [])



    return (
        <>
            <h1>User Profile</h1>
            <hr></hr>
            <div className='d-flex justify-content-between align-items-center container'>
                <div className='d-flex flex-column align-items-end'>
                    <button className='btn inline fs-4 text-warning edit-btn'
                        style={{ padding: "0", margin: "0", position: "absolute" }}
                        onClick={() => { document.getElementById('fileid').click(); }}
                        title='change your profile picture'
                    >
                        <i className="bi bi-pencil-square"></i>
                    </button>

                    <input id='fileid' type='file' hidden
                        onChange={handleChange}
                        value={inputValue}
                    />
                    <img className='rounded-circle prof-img' alt='Profile portrait' height={'100px'} width={'100px'} src={profileInfo.img === "" ? profileInfo.defImg : profileInfo.img}></img>

                </div>

                <div className='text-center'>
                    <h1> {profileInfo.fName}</h1>
                    <h3> {profileInfo.lName}</h3>
                    <h3> Age: {profileInfo.age}</h3>
                </div>
            </div >
            <hr></hr>

            <ul className='d-flex justify-content-evenly bg-body-tertiary py-3 px-0 rounded text-center'>

                <li className='d-inline top-prof-nav' >
                    <Link to={{ pathname: `/profile/${id}/posts`, state: { img: profileInfo.img === "" ? profileInfo.defImg : profileInfo.img } }}>
                        <div><i className="bi bi-postcard fs-4"></i></div>
                        Posts</Link>
                </li>

                <li className='d-inline top-prof-nav' >
                    <Link to={`/profile/${id}/about`}>
                        <div><i class="bi bi-journal fs-4"></i></div>
                        About</Link>
                </li>


                <li className='d-inline top-prof-nav' >
                    <Link to={`/profile/${id}/friends`}>
                        <div><i class="bi bi-person-arms-up fs-4"></i><i class="bi bi-person-arms-up fs-4"></i></div>
                        Friends</Link></li>
            </ul>
            <Outlet />
        </>
    );
};

export default Profile;