import React from "react";
import {Link} from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

function Room ({room}){
    return (
        <article className="room">
        <div className="img-container">
        <img src={(room.images && room.images[0])||defaultImg }
        alt ="single room"/>
        <div className="price-top">
        <h6>ksh{room.price}</h6>
        <p>per night </p>
        </div>
        <Link to ={`rooms/${room.slug}`} className="btn -primary room-link">
        Features
        </Link>
        </div>
        <p className="room-info">{room.name} </p>
        </article>

    )
}
export default Room;