import React from 'react'
import './icons.css'

const IconFav = ({favorites}) => {
    return (
        <span>
            <img className="icon-navbar-image" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637333311/rick%20and%20morty/392106_sjlcqc.png" alt="interTv-icon" />
            {
                favorites.length > 0 &&
                <span className="swym-header--count">{favorites.length}</span>
            }
        </span>
    )
}

export default IconFav
