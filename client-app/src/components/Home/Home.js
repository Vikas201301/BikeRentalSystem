// src/components/Home.jsx
/*import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div className="container mt-5 bm-url m-500"  >
      <div className="text-center">
        <h1 className="mb-4">Welcome to Bike Rental System</h1>
        <p className="lead">
          Rent bikes easily and affordably. Fast booking, great selection.
        </p>
        <Link to="/book-bike" className="btn btn-primary btn-lg mt-3">
          View Available Bikes
        </Link>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/85/85228.png" alt="Easy Booking" width="200" />
          <h5 className="mt-3">Easy Booking</h5>
          <p>Quick and simple reservation process.</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="https://tse1.mm.bing.net/th/id/OIP.zp5be8_BAFSmQjj-cBp36wHaGu?pid=ImgDet&w=474&h=430&rs=1&o=7&rm=3" alt="Affordable Prices" width="200" />
          <h5 className="mt-3">Affordable Prices</h5>
          <p>Best rates for daily or hourly rentals.</p>
        </div>
        <div className="col-md-4 text-center br-10 ">
          <img src="https://img.indianautosblog.com/2017/09/Royal-Enfield-Classic-350-Gunmetal-Grey.jpg" alt=""
       width="200px"  />
          <h5 className="mt-3">Wide Selection</h5>
          <p>Choose from scooters, mountain bikes, e-bikes, and more.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
*/
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const HomePage = () => {
  const [bikes, setBikes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/bike")
      .then(res => setBikes(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleBookNow = () => {
    navigate("/book-bike");
  };

  return (
    <div className="home-container"
    style={{background:""}}>
      

      {/* Hero */}
      <header className="hero">
    
        <h1>Ride Freely, Ride Smart</h1>
        <p>Explore your city on two wheels with our premium bike rentals.</p>
        <button onClick={handleBookNow}>Book a Bike</button>
      </header>

      {/* Featured Bikes */}
      <section className="bike-section">
        <h2>Featured Bikes</h2>
        <div className="bike-list">
          {bikes.slice(0, 4).map(bike => (
            <div key={bike.id} className="bike-card" style={{width:"320px",height:"380px"}}>
              <img src={bike.image_url} alt={bike.name} />
              <h3>{bike.name}</h3>
              <p>{bike.type} - ₹{bike.rent_per_day}/day</p>
              <p>{bike.description?.substring(0, 60)}...</p>
              <button style={{display:"none",hoverdisplay:"block"}} onClick={handleBookNow}>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>Wide Range of Bikes</h3>
            <p>From mountain bikes to scooters, we’ve got options for every rider.</p>
          </div>
          <div className="why-card">
            <h3>Affordable Rates</h3>
            <p>Pay per day, no hidden charges. Perfect for short or long rides.</p>
          </div>
          <div className="why-card">
            <h3>Easy Booking</h3>
            <p>Book a bike online in seconds and hit the road.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Browse Bikes</h3>
            <p>Check available bikes based on your needs and budget.</p>
          </div>
          <div className="step">
            <h3>2. Book Online</h3>
            <p>Select your duration, confirm details, and book easily.</p>
          </div>
          <div className="step">
            <h3>3. Ride & Enjoy</h3>
            <p>Pick up your bike and start exploring hassle-free.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Very smooth booking and the bikes were in great condition!"</p>
            <strong>— Vignesh Verma</strong>
          </div>
          <div className="testimonial">
            <p>"Perfect for short city rides. Booking took less than a minute."</p>
            <strong>— Meena K.</strong>
          </div>
          <div className="testimonial">
            <p>"Affordable and reliable service. Will book again!"</p>
            <strong>— Arjun M.</strong>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{background:"rgb(134, 134, 134)"}}>
        <div className="footer-content">
          <div>
            <h4>BikeRental</h4>
            <p>Your trusted partner for safe, affordable bike rentals.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/book-bike")}>Book Bike</li>
              <li onClick={() => navigate("/bookinghistory")}>Booking History</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email: vikashverma9599@gmail.com</p>
            <p>Phone: +91 9599657971</p>
          </div>
        </div>
        <p className="footer-bottom" style={{textAlign:"center",color:"green"}}>© 2025 BikeRental. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
