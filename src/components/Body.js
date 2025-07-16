import {restaurantList} from "../constant"
import RestrauntCard from "./RestaurantCard.js"
import { useState, useEffect } from "react";

function filterData(searchInput,restaurants){
    return restaurants.filter((restaurant)=>
        restaurant.info.name.includes(searchInput)
    );
}

const Body = () => {
        //let searchTxt="KFC";
        const [searchInput,setSearchInput]=useState("");
        const [restaurants,setRestaurants]=useState([]);
        useEffect(()=>{
            getRestaurants();
        },[])

        async function getRestaurants(){
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57590&lng=77.33450&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json=await data.json();
            console.log(json);
            setRestaurants(json?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

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