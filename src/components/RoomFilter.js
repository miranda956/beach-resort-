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
            })

        }
    })

}