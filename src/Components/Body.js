import React from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantsData from "./RestaurantData";

const Body = () => {
    return (
        <div className="flex flex-wrap  cursor-pointer justify-evenly ">
            {RestaurantsData.map((restaurant, index) => (
                <RestaurantCard key={index} {...restaurant} />
            ))}
        </div>
    );
};

export default Body;
