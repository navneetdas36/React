import {restaurantList} from "../constant"
import RestrauntCard from "./RestaurantCard.js"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

function filterData(searchInput,restaurants){
    return restaurants.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
}

const Body = () => {
        //let searchTxt="KFC";
        const [searchInput,setSearchInput]=useState("");
        const [filteredRestaurants,setFilteredRestaurants]=useState([]);
        const [allReastaurants,setAllRestaurants]=useState([]);
        
        useEffect(()=>{
            getRestaurants();
        },[])

        async function getRestaurants(){
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57590&lng=77.33450&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json=await data.json();//conversion to json
            console.log(json);
            setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        if(!allReastaurants) return null;
        
        
        return (allReastaurants.length === 0)? <Shimmer/> : (
            <>
            <div className="search-container">
                <input 
                type="text" 
                className="search-input" 
                placeholder="search" 
                value={searchInput}
                onChange={(e)=>{
                   setSearchInput(e.target.value); //on every change the value of searchInput is getting changed
                }}
                />
                <button className="search-btn" onClick={()=>{
                    //need to filter the data
                    const data=filterData(searchInput,allReastaurants);
                    //update the state-restaurants
                    setFilteredRestaurants(data);
                    
                }}>Search</button>
            </div>
            <div className="restaurant-list">
            { (filteredRestaurants?.length===0) ? (<h1>No Restaurant match your Filter!!</h1>) :
                filteredRestaurants.map(restaurant =>{
                    return <RestrauntCard key={restaurant.info.id} {...restaurant.info}/>
                })
            }
            </div>
            </>
        );
    }

export default Body;