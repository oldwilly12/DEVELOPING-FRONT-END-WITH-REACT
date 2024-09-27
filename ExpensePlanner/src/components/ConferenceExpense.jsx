import React, {useState} from 'react';
import Navbar from './Navbar'; 
import ItemSelection from './ItemSelection';
import IMAGES from '../images/images';

const rooms = [
    { id: 1, name: "Conference Room", capacity: 15, price: 1500, image: IMAGES.ConferenceRoomImage},
    { id: 2, name: "Auditorium Hall", capacity: 200, price: 5500, image: IMAGES.AuditoriumHallImage },
    { id: 3, name: "Presentation Room", capacity: 50, price: 3500, image: IMAGES.PresentationRoomImage },
    { id: 4, name: "Large Meeting Room", capacity: 10, price: 1000, image: IMAGES.LargeMeetingRoomImage },
    { id: 5, name: "Small Meeting Room", capacity: 5, price: 800, image: IMAGES.SmallMeetingRoomImage },
  ];

const addOns = [
    { id: 1, name: "Projector", price: 200, image: IMAGES.ProjectorImage},
    { id: 2, name: "Speaker", price: 35, image: IMAGES.SpeakerImage },
    { id: 3, name: "Microphones", price: 45, image: IMAGES.MicrophonesImage },
    { id: 4, name: "Whiteboards", price: 80, image: IMAGES.WhiteboardsImage },
    { id: 5, name: "Signage", price: 80, image: IMAGES.SignageImage },
];


const ConferenceExpense = () =>{
    const [selectedRooms] = useState(rooms);
    const [selectedAccesorios] = useState(addOns);

    return(
        <div className="conference-expense-container">
            <Navbar />
            <div className='row'>
                <div className='title1'>
                    <h1 className='bg-secondary my-2 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-block mx-auto text-center'>Venue Room Selection</h1>
                    <div className='cards-rooms'>
                        <ItemSelection
                           items = {selectedRooms}
                        />
                    </div>
                </div>
                <div className='title2'>
                    <h1 className='bg-secondary my-2 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-block mx-auto text-center'>Venue Room Selection</h1>
                    <div className='cards-accesorios'>
                    <ItemSelection
                           items = {selectedAccesorios}
                        />
                    </div>
                </div>
                <div className='title3'>
                    <h1 className='bg-secondary my-2 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-block mx-auto text-center'>Venue Room Selection</h1>
                    <div className='meals'>

                    </div>
                </div>                          
            </div>
        </div>
    );
}
export default ConferenceExpense;