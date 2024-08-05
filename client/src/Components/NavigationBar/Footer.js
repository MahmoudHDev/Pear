import React from 'react'
const year = new Date().getFullYear();


export const Footer = () => {
    return (<>
        <footer className='footer text-secondary text-center  py-3 bg-dark'>

            <p>All Copy Rights reserved to Mahmoud Hashim  {year}</p>

        </footer>
    </>
    )
}
