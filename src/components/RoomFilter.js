import React,{useState,useEffect} from "react";
import Title from "./Title";

const  RoomFilter=props=>{
    const [state, setstate] = useState({
        types:[],
        guests:[],
        prices:[],
        sizes:[],
        type:"all",
        price:0,
        capacity:1,
        breakfast:false,
        pets:false,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0
    });
    useEffect(()=>{
        const getRoomData=(rooms,d_type)=>{
            const data=rooms.map(item=>{
                return item[d_type];
            });
            const uinique_data=[...new Set(data)];
            return uinique_data;

        };

        const types=getRoomData(props.rooms,"type");
        const guests=getRoomData(props.rooms,"capacity");
        const prizes=getRoomData(props.rooms,"prizes");
        const sizes=getRoomData(props.rooms,"size");
        const minPrice=prizes.length>0 ?Math.min(...prizes) :0;
        const maxPrice=prizes.length>0? Math.max(...prizes):0;
        const minSize=sizes.length>0? Math.min(...sizes):0;
        const maxSize=sizes.length>0? Math.max(...sizes):0;
        setstate({
            ...state,
            types:types,
            guests:guests,
            minPrice:minPrice,
            maxPrice:maxPrice,
            minSize:minSize,
            maxSize:maxSize,
            prices:maxPrice
        });
        // you tell react which stuff matters in the hook
    },[props.rooms]);
    useEffect(()=>{
        props.onChange(state);
    },[state]);
    const handleChange=e=>{
        if(e.target.type==="checkbox"){
            setstate({...state,[e.target.name]:e.target.checked})      
        } else {
            setstate({...state,[e.target.name]:e.target.value})
        }
    };
    
    return (
        <section className="filter-container">
        <Title title="search rooms"/>
        <form className="form-filter">
        {/*select type */}
        <div className="form-group">
         <label htmlFor="type">room type</label>
        <select name ="type"
        id="type"
        className="form-control"
        onChange={handleChange}>
        <option value="all">All Types</option>
        {state.types.map((type,i)=>{
            return (
                <option key={i} value={type}>
                {type}
                </option>
            );
        })}
        </select>
        </div>
        {/* select capacity */}
        <div className="form-group">
        <label htmlFor="capacity">Guests</label>
        <select 
        name="capacity"
        id="capacity"
        className="form-control"
        onChange={handleChange}>
        {state.guests.sort().map((guests,i)=>{
            return(
                <option key={i} value={guests}>
                {guests}
                </option>
            )
        })}
        </select>
        </div>
        {/*room price */}
        <div className="form-group">
        <label htmlFor="price">room price ksh{state.prices}</label>
        <input 
        type="range"
        name="price"
        id="price"
        min={state.minPrice}
        max={state.maxPrice}
        onChange={handleChange}/>
        {/*room size */}
        <div className="size-inputs">
        <input 
        type="number"
        name="minSize"
        id="size"
        value={state.minSize}
        className="size-input"
        onChange={handleChange}/>
        </div>
        </div>
        {/* extras*/}
        <div className="form-group">
        <div className="single-extra">
        <input
        type="checkbox"
        name="breakfast"
        id="breakfast"
        checked={state.breakfast}
        onChange={handleChange}/>
        <input 
        type="checkbox"
        name="pets"
        id="pets"
        checked={state.pets}
        onChange={handleChange}/>
        <label htmlFor="pets">pets</label>
        </div>
        </div>
        </form>   
        </section>
    )
    
}
export default RoomFilter;