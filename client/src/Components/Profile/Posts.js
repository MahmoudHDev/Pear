import React from 'react'
import { useLocation } from 'react-router-dom';

const Posts = () => {

    const location = useLocation();
    const { img } = location.state || {};

    // Use img here
    console.log(img);


    return (<>


        <div>
            <h2 className='fw-light'><i className="bi bi-postcard"></i>  Posts</h2>
        </div>

        <form action='/posts' method='post'>

            <div className='container'>
                <div>
                    <img ></img>
                </div>
                <div className='container w-50'>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Share your thoughts here..." id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label for="floatingTextarea2">Share your thoughts here... <i className="bi bi-pencil-fill text-secondary"></i></label>
                    </div>
                    <button className='btn btn-submit mt-3' typeof='submit'>Post</button>
                </div>
            </div>
        </form>

    </>)
}

export default Posts;
