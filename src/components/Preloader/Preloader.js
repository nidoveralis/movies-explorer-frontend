import React from 'react'
import './Preloader.css'

const Preloader = ({preloader}) => {
    return (
        <div className={`${preloader ? "preloader" : "preloader_hiddin" }`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
