import {restaurantList} from "../constant"
import RestrauntCard from "./RestaurantCard.js"
import { useState } from "react";

function filterData(searchInput,restaurants){
    return restaurants.filter((restaurant)=>
        restaurant.info.name.includes(searchInput)
    );
}

const Body = () => {
        //let searchTxt="KFC";
        const [searchInput,setSearchInput]=useState("");
        const [restaurants,setRestaurants]=useState(restaurantList);
        return(
            <>
            <div className="search-container">
                <input 
                type="text" 
                className="search-input" 
                placeholder="search" 
                value={searchInput}
                onChange={(e)=>{
                   setSearchInput(e.target.value);
                }}
                />
                <button className="search-btn" onClick={()=>{
                    //need to filter the data
                    const data=filterData(searchInput,restaurants);
                    //update the state-restaurants
                    setRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
            {
                restaurants.map(restaurant =>{
                    return <RestrauntCard key={restaurant.info.id} {...restaurant.info}/>
                })
            }
            </div>
            </>
        );
    }

export default Body;