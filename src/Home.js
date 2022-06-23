import React from 'react';
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
     <div className="home">
        <img 
            className="home_image"
            src="https://res.cloudinary.com/dtlmxusoy/image/upload/v1630809155/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220__odzdkl.jpg"
            alt=""
        />
        {/*Product id, title, price, rating, image*/}
        <div className="home_row">
            <Product 
            id="12345"
            title="OFIXO Multi-Purpose Laptop Table/Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk (Wooden)"
            price={101.96}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41JUbD67xQS._SY300_SX300_QL70_FMwebp_.jpg"
            />
            <Product 
            id="12346"
            title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand(Black)"
            price={50.53}
            rating={3}
            image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._SL1500_.jpg"
            />
        </div>
        <div className="home_row">
            <Product 
            id="12347"
            title="Kore PVC 20 Kg COMBO2-WB with One 5 Ft Plain + One 3 Ft Curl Rod and One Pair Dumbbell Rods with Gym Accessories Home Gym Set, Multicolor"
            price={71.86}
            rating={3}
            image="https://m.media-amazon.com/images/I/812hqIbPzuL._SL1500_.jpg"
            />
            <Product 
            id="12348"
            title="VCORE FITNESS Hex Dumbbell 5Kg Single Dumbbell, Ideal for Home Gym Dumbbells Exercise Workout for Men & Women, Steel Iron Rubber Encased, Black"
            price={35.43}
            rating={4}
            image="https://m.media-amazon.com/images/I/61wwaoOD3tL._SL1000_.jpg"
            />
            <Product 
            id="12349"
            title="The Cube Club Adjustable Dumbbells (2.5kg to 24kg) for Men & Women for Fitness and Home Workout (Pair)"
            price={100.36}
            rating={5}
            image="https://m.media-amazon.com/images/I/71zx5L-3D7L._SL1500_.jpg"
            />
        </div>
        <div className="home_row">
            <Product 
            id="12350"
            title="Samsung 27 inch (68.6 cm) IPS, Bezel Less,75 Hz Flat, Flicker Free LED Monitor-LF27T350FHWXXL (Dark Blue Gray)"
            price={200.50}
            rating={4}
            image="https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg"
            />
        </div>
        {/* Product */}
        </div>
    )
}

export default Home;
