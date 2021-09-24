import React from 'react'
import { Card } from 'react-bootstrap';
import './cardNoResults.css'


export const CardNoResults = () => {


    return (
        <div className="glass-card text-center text-white-50 p-5 mt-5 row">
            <div className="col-6 px-0">
                <Card.Img className="poopy-img" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630686328/rick%20and%20morty/PikPng.com_rick-and-morty-png_3568759_lo2kna.png" />
            </div>
            <Card.Body className="col-6 d-flex flex-column justify-content-center" >
                <div className="balloon ooh-wee">
                OOH WEEE ! It seems that person doesn’t exist...
                    But i'm a real person my friend...<br />OOOH GOSH ! remember that time we got stuck in the elevator together, after the hulk musical...
                </div>

            </Card.Body>
        </div>
    )
}
