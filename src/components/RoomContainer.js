import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import {getRooms} from "../data/";
import RoomFilter from "./RoomsFilter";
import RoomList from "./RoomList";

function RoomContainer(props){
    const [state, setstate] = useState({
        rooms:[],
        sortedRooms:[],
        loading:true
    });
    useEffect(()=>{
        document.title="Beach Resort || Rooms"
        props.getRooms();
    },//If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument inside useeffect
    //This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case
    []);
 
    useEffect(()=>{
        setstate({
            ...state,
            rooms:props.rooms,
            sortedRooms:props.rooms,
            loading:false
        })
        // you tell react which stuff matters
        // think it as component did update and component unmount at the same time  
    },[props.rooms]);
    const handleChange=({
        type,
        price,
        capacity,
        breakfast,
        pets,
        minSize,
        maxSize

    })=>{
        let sortedRooms=props.rooms;
        if(type){
            if(type==="all"){
                sortedRooms=props.rooms
            } else {
              
                  sortedRooms=sortedRooms.filter(room=>room.type===type);
            }
        }
        if(capacity){
            sortedRooms=sortedRooms.filter(room=>room.capacity>=capacity);
        }
        if(price){
            sortedRooms=sortedRooms.filter(room=>room.price<=price);
        }
        if(breakfast){
            sortedRooms=sortedRooms.filter(room=>room.breakfast===true);
        }
        if(pets){
            sortedRooms=sortedRooms.filter(room=>room.pets===true);
        }
        if(minSize && maxSize){
            sortedRooms=sortedRooms.filter(
                room=>room.size >=minSize && room.size <=maxSize
            );
        }
        setstate({...state,sortedRooms:sortedRooms});

    };
    return (
        <div style={{marginBottom:"2rem"}}>
        <RoomFilter rooms={state.rooms} onChange={handleChange}/>
        <RoomList rooms={state.sortedRooms}/>
        </div>
    );

}
const mapStatesToprops=state=>{
    return {rooms:state.rooms}
};
export default connect(
    mapStatesToprops,
    {getRooms}
)(RoomContainer);