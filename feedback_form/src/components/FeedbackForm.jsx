
import "./FeedbackFrom.css";
import React, { useState } from "react";
const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback:''
    });

const handleChange = (event) => {
    const{name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Feedback: ${formData.feedback}
    `;
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed){
        console.log('Submitting feedback: ', formData);
        setFormData({
            name: '',
            email: '',
            feedback: ''
        });
        alert('Thanks you for your valuable feedback!');
    }
};

    return(
    <div className="contain-form">
        <div className="title-subtitle">
            <h1 className="title-form">We'd Love to Hear From You!</h1>
            <h2 className="subtitle">Please share your feedback with us.</h2>
            <form onSubmit={handleSubmit} className="feedback-form">    
                <div className="text-form d-grid gap-3 my-5">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
                    <textarea name="feedback" placeholder="Your Feedback" value={formData.feedback} onChange={handleChange}/>
                    <div class="d-grid">
                        <button class="btn" type="submit">Submit Feedback</button>
                    </div>
                 </div>
            </form>     
        </div>
    </div>
    )
}

export default FeedbackForm;