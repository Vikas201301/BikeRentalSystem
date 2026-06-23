🚲 Bike Rental System (Full Stack Web Application)
📌 Project Overview

The Bike Rental System is a full-stack web application designed to simplify the process of renting bikes online. It allows users to easily browse available bikes, check details, and book bikes for specific dates. The system also includes a powerful admin panel for managing bikes, users, and bookings.

This project demonstrates real-world full-stack development using React for frontend UI, Node.js + Express for backend APIs, and MySQL for database management.

🎯 Objective

The main objective of this project is to build a digital bike rental platform that:

Reduces manual booking effort
Improves rental management efficiency
Provides a smooth user experience
Centralizes data for admins and users
🚀 Features
👤 User Side Features
🔍 Browse all available bikes with details (type, price, availability)
📅 Book bikes for selected dates
💰 View total rental cost automatically calculated
📜 View booking history
🔐 Secure login and registration system
📱 Fully responsive UI for mobile and desktop
🛠️ Admin Side Features
➕ Add new bikes with images and details
✏️ Update bike information (price, availability, description)
❌ Remove bikes from system
📊 View all user bookings
👥 Manage user data and roles
🛠️ Tech Stack
🎨 Frontend
React.js (Component-based UI)
HTML5 (Structure)
CSS3 (Styling & responsiveness)
JavaScript (ES6+)
Axios (API communication)
⚙️ Backend
Node.js (Runtime environment)
Express.js (Server framework)
REST APIs (Data communication)
🗄️ Database
MySQL (Relational database management)
📁 Project Structure
bike-rental-app/
│
├── frontend/                      # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Pages (Home, Login, Booking, etc.)
│   │   ├── services/             # API calls (Axios)
│   │   ├── App.js
│   │   └── index.js
│
├── backend/                      # Node + Express Backend
│   ├── db.js/                   # DB connection
│   ├── routes/                  # API routes
│   ├── controllers/             # Business logic
│   ├── models/                  # Database queries
│   ├── server.js                # Entry point
│
├── database/
│   └── schema.sql              # SQL database structure
│
└── README.md
⚙️ Installation & Setup Guide
1️⃣ Clone the Repository
git clone https://github.com/your-username/bike-rental-app.git
cd bike-rental-app
2️⃣ Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=bike_rental
JWT_SECRET=your_secret_key

Run backend server:

node server.js
3️⃣ Frontend Setup
cd frontend
npm install
npm start
4️⃣ Database Setup (MySQL)
CREATE DATABASE bike_rental;

USE bike_rental;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255),
    role VARCHAR(20)
);

CREATE TABLE bikes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    type VARCHAR(50),
    rent_per_day DECIMAL(10,2),
    availability BOOLEAN,
    image_url TEXT,
    description TEXT
);

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    bike_id INT,
    start_date DATE,
    end_date DATE,
    total_price DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (bike_id) REFERENCES bikes(id)
);
🔐 Authentication System

The project uses JWT (JSON Web Token) for secure authentication:

User login generates a token
Token is used to protect private routes
Role-based access ensures separation between Admin and User
📸 Screenshots

(Add your project screenshots here – Home page, Booking page, Admin panel, etc.)

📊 Key Learnings / Highlights
Full-stack project structure understanding
React component-based development
REST API creation and integration
MySQL database design and relationships
Authentication & authorization system
Real-world CRUD operations
🚀 Future Enhancements
💳 Online payment gateway integration
📍 Google Maps location-based bike search
⭐ User rating and review system
📱 Mobile app using React Native
📊 Admin analytics dashboard (Power BI integration)
🤝 Contribution

Contributions are welcome!
Feel free to fork this repository and submit pull requests for improvements or new features.

📄 License

This project is open-source and available under the MIT License.

👨‍💻 Author

Vikash Verma
