import React from "react";
import Carousel from "./Carousel";

function Main() {

    return (
    <div className="home-body">
        <h1>Title</h1>
            <div>A body div</div>
                <div className="carousel-component-container">
            <Carousel /> 
            </div>
    </div>
    )
}

export default Main;