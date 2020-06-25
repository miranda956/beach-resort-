import React from "react";
import Room from "./Room";

function RoomList({rooms}){
if(rooms.length===0){
    return (
        <div className="empty-search">
        <h3>unfortanely no rooms matched your search</h3>        
        </div>
    );
}
return (
    <section className="roomsList">
    <div className="roomslist-centered">
    {rooms && rooms.map((item,i)=>{
        return <Room key={i} rooms={item}/>
    })} 
    </div>   
    </section>
);
}
export default RoomList;
