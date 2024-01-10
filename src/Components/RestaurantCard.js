import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utiles/cartSlice";

const RestaurantCard = ({ name, type, rating, deliveryTime, imageSrc }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
    
        dispatch(addItem(item));
    };

    return (
        <div className="rounded overflow-hidden shadow-lg m-5 flex flex-col">
            <img className="w-full  h-40 object-cover" src={imageSrc} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{type}</p>
                <p className="text-gray-700 text-base">Rating: {rating}</p>
                <p className="text-gray-700 text-base">Delivery Time: {deliveryTime} mins</p>
            </div>
            <button
                onClick={() => {
                  
                    const item = { name, type, rating, deliveryTime, imageSrc };
                    handleAddItem(item);
                }}
                className="bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Add
            </button>
        </div>
    );
};

export default RestaurantCard;
