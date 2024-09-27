import React from 'react';
import Navbar from './Navbar'; 
import ConferenceRoomImage from './Imagenes/ConferneceRoom.jpg';
// import './ConferneceExpense.css';

const rooms = [
    { id: 1, name: "Conference Room", capacity: 15, price: 1500, image: ConfernenceRoomImage.jpg},
    { id: 2, name: "Auditorium Hall", capacity: 200, price: 5500, image: "/path-to-auditorium-hall-image.jpg" },
    { id: 3, name: "Presentation Room", capacity: 50, price: 3500, image: "/path-to-presentation-room-image.jpg" },
    { id: 4, name: "Large Meeting Room", capacity: 10, price: 1000, image: "/path-to-large-meeting-room-image.jpg" },
    { id: 5, name: "Small Meeting Room", capacity: 5, price: 800, image: "/path-to-small-meeting-room-image.jpg" },
  ];

const ConferenceExpense = () =>{
    return(
        <div className="conference-expense-container">
            <Navbar />
            <div className="conference-expense-content">
               
            </div>
        </div>
    );
}
export default ConferenceExpense;