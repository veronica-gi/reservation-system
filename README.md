# Reservation System

**Reservation System** is a web application to manage service or appointment reservations. Users can create, view, update, and delete reservations efficiently. The app is built with a **React** frontend and a **Java Spring Boot** backend, using **MySQL** for data storage.  

---

## Features

- Create, view, update, and delete reservations.  
- Responsive and user-friendly interface.  
- RESTful API with Spring Boot.  
- Data persistence using MySQL.  
- Frontend deployment ready for GitHub Pages.  

---

## Technologies Used

- **Frontend:** React 19, React Scripts 5  
- **Backend:** Java 17, Spring Boot 3  
- **Database:** MySQL  
- **Version Control:** Git & GitHub  
- **Styling:** CSS  

---

## Installation and Setup

### Backend

1. Clone the repository and navigate to the backend folder:

```bash
git clone https://github.com/your-username/reservation-system.git
cd reservation-system/backend

2. Create MYSQL Database:
CREATE DATABASE reservation_db;

3. Update application.properties with your database credentials:

spring.datasource.url=jdbc:mysql://localhost:3306/reservation_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update

4. Run the backend server:
mvn spring-boot:run

(Backend runs on: http://localhost:8080)

### Frontend

1. Navigate to the frontend folder and install dependencies:

cd frontend
npm install

2. Start the development server:

npm start

(Frontend runs on: http://localhost:3000 (connects to backend automatically)
