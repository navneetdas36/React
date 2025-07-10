    import React from "react";
    import ReactDOM from "react-dom/client";
    import Header from "./components/Header.js";
    import Body from "./components/Body.js";
    import Footer from "./components/Footer.js";
    import { IMG_CDN_URL } from "./constant.js";
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
