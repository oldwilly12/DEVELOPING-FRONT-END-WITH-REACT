// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css' //importacion de estilos

const HomePage = () => {
    return(
    <div className="homepage-container">
        <div className="homepage-content">
            <div className="left-section">
                <h1>Conference Expense Planner</h1>
                <p>Plab your next major event with us!</p>
                <Link to = "/ConferenceExpense">
                <button className="get-start-button">Get Start</button>
                </Link>

            </div>
            <div className="right-section">
                <p><b>
                    Welcome to BudgetEase Solutions, your trusted partner in simplifying budget management and financial solutions.
                    At BudgetEase, we understand the importance of effective budget planning and strive to provide intuitive, user-friendly
                    solutions to meet the diverse needs of our clients. 
                </b></p>
                <p><b>
                    With a commitment to efficiency and innovation, we empower individuals and businesses to take control of their finances and achieve
                    their goals with ease.
                </b></p>
                <p><b>
                    At BudgetEase Solutions, our mission is to make budgeting effortless and accessible for everyone. Whether you're a small business
                    owner, a busy professional, or an individual looking to manage your personal finances, we offer tailored solutions to streamline your
                    budgeting process.    
                </b></p>
            </div>
        </div>
    </div>
    );
}
export default HomePage;