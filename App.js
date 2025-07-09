    import React from "react";
    import ReactDOM from "react-dom/client";
    import restrauntList from "./data.js";
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

    const RestrauntCard=() => {
        return(
            <div className="card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restrauntList[0].info.cloudinaryImageId}/>
                <h2>{restrauntList[0].info.name}</h2>
                <h3>{restrauntList[0].info.cuisines.join(", ")}</h3>
                <h4>{restrauntList[0].info.deliveryTime + "minutes"}</h4>
            </div>
        );
    };

    const Body = () => {
        return(
            <div className="restaurant-list">
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            </div>
        )
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
