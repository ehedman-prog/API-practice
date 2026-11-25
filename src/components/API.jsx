import React, { useState, useEffect } from "react";


function API(){
    const [dogImage, setDogImage] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setDogImage(data.message);
            console.log(data)
        }
        catch (error){
            console.log("Error fetching date:", error)
        };
    };

    //useEffect(() => {fetchData();},[]);
    const generateDog = () => {
        fetchData();
    }

    return(
        <div className="API__content">
            <h1> API practice</h1>
            <h2>Want to see something cute?</h2>
            <button className="content__btn" onClick={generateDog}>Click Here</button>
            <br />
            {dogImage && <img className="content__img" src={dogImage}/>}
        </div>
    );
};

export default API;