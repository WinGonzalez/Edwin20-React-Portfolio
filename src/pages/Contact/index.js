import React, { useState } from 'react';
import './style.css';

function Contact() {
    const [emailValid, setEmailValid] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check email format
        const emailInput = event.target.email.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(emailInput);

        if (isValid) {
            // Email is valid, submit the form
            console.log('Form submitted');

            // Reset the form
            event.target.reset();

            // Reset the email validity state
            setEmailValid(true);
        } else {
            // Email is not valid, set state to show error message
            setEmailValid(false);
        }
    };

    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact me</h2>
            <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />

                {/* Add a hidden field to prevent spam submissions */}
                <div hidden>
                    <label>
                        Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Your First and Last Name</label>
                    <input type="text" name="name" id="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={() => setEmailValid(true)}
                    />
                    {!emailValid && <p className="error-message">Invalid email format</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" required></textarea>
                </div>

                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
}

export default Contact;