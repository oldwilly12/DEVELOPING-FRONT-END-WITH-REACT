import React from 'react';
import Navbar from './Navbar'; 
import images from './Imagenes/images';
// import './ConferneceExpense.css';

const rooms = [
    { id: 1, name: "Conference Room", capacity: 15, price: 1500, image: images.ConferenceRoomImage},
    { id: 2, name: "Auditorium Hall", capacity: 200, price: 5500, image: images.AuditoriumHallImage },
    { id: 3, name: "Presentation Room", capacity: 50, price: 3500, image: images.PresentationRoomImage },
    { id: 4, name: "Large Meeting Room", capacity: 10, price: 1000, image: images.LargeMeetingRoomImage },
    { id: 5, name: "Small Meeting Room", capacity: 5, price: 800, image: images.SmallMeetingRoomImage },
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