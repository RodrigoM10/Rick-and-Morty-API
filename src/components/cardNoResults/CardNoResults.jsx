import React from 'react'
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router';
import './cardNoResults.css'


export const CardNoResults = () => {
    const locationUse = useLocation();
    const { pathname } = locationUse;
    const splitLocation = pathname.split("/");

    return (

        <div className="glass-card w-100 text-center text-white-50 me-2 px-0 py-1 mx-md-0 p-md-3 mt-5 d-flex justify-content-end justify-content-md-center align-items-center">
            <div className=" px-0">
                <Card.Img className="poopy-img" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630686328/rick%20and%20morty/PikPng.com_rick-and-morty-png_3568759_lo2kna.png" />
            </div>
            <div className=" d-flex flex-column justify-content-center" >
                <div className="balloon ">
                    {splitLocation[1] !== 'favorites' ?
                        <p> OOH WEEE ! It seems that person doesn’t exist...
                            But i'm a real person my friend...<br />OOOH GOSH ! remember that time we got stuck in the elevator together, after the hulk musical...
                        </p>
                        :
                        <p>
                            OOH WEEE ! Apparently you don’t have any favorite characters yet...<br /> But you can always count on me my dear friend.
                        </p>
                    }
                </div>


            </div>
        </div>
    )
}
