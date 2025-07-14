// Server setup

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());



// USER LOGIN
  /*     

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Login error:", err.message);
      return res.status(500).send("Server error");
    }

    if (result.length === 0) {
      //  No user found
      return res.status(401).send("Invalid email or password");
    }

    //  Successful login
    const user = result[0];
    res.status(200).json(user);
  });
});

*/

//  Register API
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error("Error in registration:", err);
      return res.status(500).send("Failed to register!");
    }
    res.status(201).send("Register successfully");
  });
});

//fetch all available bike
app.get("/bike", (req, res) => {
  const sql = "SELECT * FROM bike WHERE availability = TRUE";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(result);
  });
});

//demo
app.post("/book-bike", (req, res) => {
  const { user_id, bike_id, duration, total_amount } = req.body;
  const sql = "INSERT INTO bookings (user_id, bike_id, duration, total_amount) VALUES (?, ?, ?, ?)";
  db.query(sql, [user_id, bike_id, duration, total_amount], (err, result) => {
    if (err) {
      console.error("Error booking bike:", err);
      res.status(500).send("Booking failed");
    } else {
      res.send("Booking successful");
    }
  });
});

// book bike by user store in mysql
app.post("/book-bike", (req, res) => {
  const { user_id, bike_id, duration } = req.body;

  const rateQuery = "SELECT rent_per_day FROM bike WHERE id = ? AND availability = TRUE";
  db.query(rateQuery, [bike_id], (err, result) => {
    if (err || result.length === 0) {
      return res.status(400).json({ error: "Bike not available" });
    }

    const rate = result[0].rent_per_day;
    const total_amount = rate * duration;

    const insertBooking = `
      INSERT INTO bookings (user_id, bike_id, duration, total_amount)
      VALUES (?, ?, ?, ?)`;

    db.query(insertBooking, [user_id, bike_id, duration, total_amount], (err2, result2) => {
      if (err2) return res.status(500).json({ error: "Booking failed" });

      // Set bike as unavailable after booking (optional)
      const updateAvailability = "UPDATE bike SET availability = FALSE WHERE id = ?";
      db.query(updateAvailability, [bike_id]);

      res.json({ message: "Booking successful" });
    });
  });
});


//fetch bookinghistory 
app.get("/bookinghistory/:userId", (req, res) => {
  const userId = req.params.userId;
  const sql = `
    SELECT 
      b.id, 
      bk.name AS bike_name, 
      b.duration, 
      b.total_amount, 
      b.booking_date
    FROM bookings b
    JOIN bike bk ON b.bike_id = bk.id
    WHERE b.user_id = ?
    ORDER BY b.booking_date DESC
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error fetching booking history:", err);
      return res.status(500).send("Error fetching history");
    }
    res.json(results);
  });
});

// temparary code testing

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.length === 0) return res.status(401).json({ error: "Invalid credentials" });
    const user = result[0];
    res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
  });
});







app.listen(5000, () => console.log("Server running at http://localhost:5000"));
   


