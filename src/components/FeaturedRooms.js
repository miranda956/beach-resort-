import React,{useState,useEffect} from "react";
import {connect} from "redux";
import {getRooms} from "../data/actions/roomactions";
import Title from "./Title";
import Room from "./Room";

const FeaturedRooms=props=>{
    const [state, setstate] = useState({rooms:[],loading:true});
    

    useEffect(()=>{
        props.getRooms();
        // clean up the effect 
    },[])
    useEffect(()=>{
    let featured=props.rooms.filter(item=> item.featured===true);
    setstate({rooms:featured,loading:false});
    // you tell react stuff that matters // think of it as component unmounting
    },[props.rooms]);
    return (
        <React.Fragment>
        <section className="featured-rooms">
        <Title title="featured-rooms"/>
        <div className="featured-rooms-centered">
        {state.rooms.map((room,i)=>{
            return <Room key={i} room={room}/>
        })}
        </div>
        </section>
        </React.Fragment>
    );
}
const mapStateToProps=state=>{
    return {rooms:state.rooms}
};

export default connect(
    mapStateToProps,
    {getRooms}
)(FeaturedRooms);

