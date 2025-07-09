    import React from "react";
    import ReactDOM from "react-dom/client";
    import restrauntList from "./data.js";
import restaurants from "./data.js";
    {/**
                Header
                    -logo
                    -List Items(right side)
                    -cart
                Body
                    -search bar
                    -Restaurant list
                    -Restaurant card
                        -image
                        -Name
                        -Rating
                        -cusines 
                Footer
                    -Links
                    -copyright        
                */}

    const Title= () => (
        <a href="/">
        <img className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" />
        </a>
    );
    
    const Header=() => {
        return (
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
        );
    }

    const RestrauntCard=({name,cuisines,cloudinaryImageId,deliveryTime}) => {
        return(
            <div className="card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{deliveryTime + "minutes"}</h4>
            </div>
        );
    };

    // const Body = () => {
    //     return(
    //         <div className="restaurant-list">
    //         <RestrauntCard {...restrauntList[0].info}/>
    //         <RestrauntCard {...restrauntList[1].info}/>
    //         <RestrauntCard {...restrauntList[2].info}/>
    //         <RestrauntCard {...restrauntList[3].info}/>
    //         <RestrauntCard {...restrauntList[4].info}/>
    //         <RestrauntCard {...restrauntList[5].info}/>
    //         <RestrauntCard {...restrauntList[6].info}/>
    //         <RestrauntCard {...restrauntList[7].info}/>
    //         <RestrauntCard {...restrauntList[8].info}/>
    //         </div>
    //     )
    // }

    const Body = () => {
        return(
            <div className="restaurant-list">
            {
                restrauntList.map(restaurant =>{
                    return <RestrauntCard key={restaurant.info.id} {...restaurant.info}/>
                })
            }
            </div>
        );
    }

    const Footer= () => {
        return(
            <h4>Footer</h4>
        );
    }

    const AppLayout = () =>{
        return(
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
        );
    };


    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);
