import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const uri = 'http://localhost:9000/posts'


const Posts = () => {
    const id = useParams().id.replace(":", "");
    const [imgSrc, setImgSrc] = useState("")


    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = await axios.post(uri, { id: id });
                if (info.data.status) {
                    // Success  

                    const userData = info.data.data
                    userData.img === "" ? setImgSrc(userData.defImg) : setImgSrc(userData.img)


                    console.log(userData)
                } else {
                    // Error
                }

            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    })



    return (<>


        <div>
            <h2 className='fw-light'><i className="bi bi-postcard"></i>  Posts</h2>
        </div>

        <form action='/posts' method='post'>

            <div className='d-inline'>

                <div className='container w-50 d-flex align-items-center'>

                    <div className='py-1'>
                        <img className='rounded-circle' src={imgSrc} alt='profile' width={`50px`} height={`50px`}></img>
                    </div>

                    <div className='d-flex flex-column'>

                        <div class="form-floating">
                            <textarea className="form-control" placeholder="Share your thoughts here..." id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                            <label for="floatingTextarea2">Share your thoughts here... <i className="bi bi-pencil-fill text-secondary"></i></label>
                        </div>

                    </div>
                </div>
                <button className='btn btn-submit mt-3' typeof='submit'>Post</button>
            </div>


        </form>

    </>)
}

export default Posts;
