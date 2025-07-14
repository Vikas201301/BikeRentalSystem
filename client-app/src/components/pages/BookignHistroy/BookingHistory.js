import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookingHistory.css"; // optional styling

const BookingHistory = () => {
  const [history, setHistory] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); // get logged-in user
  const userId = user?.id;

  useEffect(() => {
    if (!userId) return;

    axios.get(`http://localhost:5000/bookinghistory/${userId}`)
      .then((res) => setHistory(res.data))
      .catch((err) => console.error("Failed to fetch history:", err));
  }, [userId]);

  return (
    <div className="booking-history">
      <h2 style={{textAlign:"center",color:"orange",fontFamily:"monospace"}}>Your Booking History</h2>
      {history.length === 0 ? (
        <p style={{textAlign:"center",marginTop:"150px",color:"green"}}>No bookings found...</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Bike Name</th>
              <th>Duration (days)</th>
              <th>Total Amount</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id}>
                <td>{item.bike_name}</td>
                <td>{item.duration}</td>
                <td>₹{item.total_amount}</td>
                <td>{new Date(item.booking_date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingHistory;
