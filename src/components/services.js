import React from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";

const services=[

    {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "enjoys the services we offer at scale ."
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "we offer it scale without delay "
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "enjoy our top premium services "
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "feel at home at our resort ."
      }

];
function Services(){
return(
    <section className="services">
    <Title title="services"/>
    <div className="services-center">
    {services.map((service,i)=>{
        return (
            <article key ={i}className="service">
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>   
            </article>
        );
    })}
    </div>
    </section>
);
}
export default Services;
