/*import React, { useEffect, useState } from "react";
import axios from "axios";
import "./book.css";

const BookBike = () => {
  const [bikes, setBikes] = useState([]);
  const [duration, setDuration] = useState({});
  const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user
  const userId = user?.id;

  useEffect(() => {
    axios.get("http://localhost:5000/bike")
      .then((res) => setBikes(res.data))
      .catch((err) => console.error("Error fetching bikes:", err));
  }, []);

  const handleBooking = (bikeId) => {
    const selectedDuration = duration[bikeId];
    if (!selectedDuration || selectedDuration <= 0) {
      alert("Enter a valid duration");
      return;
    }
    

    axios.post("http://localhost:5000/book-bike", {
      user_id: userId,
      bike_id: bikeId,
      duration: selectedDuration
    })
      .then((res) => {
        const cost=bikes.rent_per_day*[bikes.bike_id];
setBikes({...bikes,cost})
        alert(`Booking successful!
          You booked a ${bikes.name} for ${cost} hour(s).\nTotal: $${cost}`);
      
        
        window.location.reload();
      })
      .catch((err) => {
        alert("Booking failed");
        console.error(err);
      });
  };

  return (
    <div className="book-bike">
      <h2>Available Bikes</h2>
      <div className="bike-grid">
        {bikes.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <img src={bike.image_url} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>Type: {bike.type}</p>
            <p>{bike.description}</p>
            <p>Rent: ₹{bike.rent_per_day}/day</p>
            <input
              type="number"
              placeholder="Duration (days)"
              value={duration[bike.id] || ""}
              onChange={(e) => setDuration({ ...duration, [bike.id]: e.target.value })}
            />
            <button onClick={() => handleBooking(bike.id)}>Book Now</button>
          </div>
        ))}
      </div>

      
       {bikes && (
        <div className="alert alert-info mt-4 text-center">
          <h5>Rental Confirmed</h5>
          <p>
            <strong>{bikes.name}</strong> for {bikes.hours} hour(s).<br />
            Total Cost: <strong>${bikes.rent_per_day}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default BookBike;
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./book.css";

const BookBike = () => {
  const [bikes, setBikes] = useState([]);
  const [duration, setDuration] = useState({});
  const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user
  const userId = user?.id;

  useEffect(() => {
    axios.get("http://localhost:5000/bike")
      .then((res) => setBikes(res.data))
      .catch((err) => console.error("Error fetching bikes:", err));
  }, []);

  const handleBooking = (bikeId) => {
    const selectedDuration = duration[bikeId];
    if (!selectedDuration || selectedDuration <= 0) {
      alert("Please enter a valid number of days.");
      return;
    }

    const selectedBike = bikes.find((bike) => bike.id === bikeId);
    if (!selectedBike) {
      alert("Bike not found.");
      return;
    }

    const totalCost = selectedBike.rent_per_day * selectedDuration;

    axios.post("http://localhost:5000/book-bike", {
      user_id: userId,
      bike_id: bikeId,
      duration: selectedDuration,
      total_amount: totalCost
    })
      .then((res) => {
        alert(
          `Booking Confirmed!\n\nBike: ${selectedBike.name}\nDuration: ${selectedDuration} day(s)\nTotal Cost: ₹${totalCost}`
        );
        window.location.reload();
      })
      .catch((err) => {
        console.error("Booking error:", err);
        alert("Booking failed. Try again.");
      });
  };

  return (
    <div className="book-bike">
      <h2>Available Bikes</h2>
      <div className="bike-grid">
        {bikes.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <img src={bike.image_url} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>Type: {bike.type}</p>
            <p>{bike.description}</p>
            <p>Rent: ₹{bike.rent_per_day}/day</p>
            <input
              type="number"
              placeholder="Duration (days)"
              value={duration[bike.id] || ""}
              onChange={(e) => setDuration({ ...duration, [bike.id]: e.target.value })}
            />
            <button onClick={() => handleBooking(bike.id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookBike;


