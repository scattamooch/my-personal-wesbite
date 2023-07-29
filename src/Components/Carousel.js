import React from "react";
import CarouselItems from "./CarouselItems";
import {useState, useEffect} from "react";

function Carousel() {

    const [activeItem, setActiveItem] = useState(0);

    const items = [
        {
            title: "",
            description: "Blah blah",
            image: require("../Images/dishwasher-devourer.JPG")
        },
        {
            title: "",
            description: "Blah blah",
            image: require("../Images/dust-biter.JPG")
        },
        {
            title: "",
            description: "Blah blah",
            image: require("../Images/laundry-lurker.JPG")
        },
        {
            title: "",
            description: "Blah blah",
            image: require("../Images/soapy-suds.JPG")
        },
        {
            title: "",
            description: "Blah blah",
            image: require("../Images/trash-titan.JPG")
        },
    ];

// gives functionality to the indicators and arrows. onClicks in each container below
    function updateIndex(newIndex) {
        if (newIndex < 0){
            newIndex = 0    
        }else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }
        setActiveItem(newIndex);
    };

    function moveIndex() {
        const nextIndex = activeItem + 1;
        if (nextIndex >= items.length) {
            updateIndex(0);
        }else {
        updateIndex(nextIndex);
        }
    }

    useEffect(() => {
        const timer = setTimeout(moveIndex, 4500)
        return () => {
            clearTimeout(timer);
        };
    }, [activeItem])

    return (
        <div className = "carousel-container">
            <div className = "inner-container"
            style = {{transform: `translate(-${activeItem * 100}%)`}}
            >
                {items.map((item) => {
                    return <CarouselItems item={item} width={"100%"}/>
                })}
            </div>
                <div className="carousel-buttons">
                    <button onClick = {() => {
                        updateIndex(activeItem - 1)
                    }}
                    className="arrow-buttons">
                        <span class="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                    </button>
                    <div className="indicators">
                        {items.map((item, index) => {
                            return (
                            <button onClick = {() => {
                                updateIndex(index)
                            }}
                            className="indicator-buttons">
                                <span className={`material-symbols-outlined ${index === activeItem ? "indicator-symbol-active" : "indicator-symbol"}`}>
                                    radio_button_checked
                                </span>
                            </button>
                            )
                        })}
                        
                    </div>
                    <button onClick = {() => {
                        updateIndex(activeItem + 1)
                    }}
                    className="arrow-buttons">
                        <span class="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </button>
                </div>
        </div>
    )
}

export default Carousel;