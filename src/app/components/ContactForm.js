'use client'
import styles from '@/app/contact/contact.module.css';
import { useState } from 'react';

const ContactForm = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content_Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })

            // Set the status based on the response from the API route
            if (res.status === 200) {
                setUser({
                    username: '',
                    email: '',
                    phone: '',
                    message: '',
                })
                setStatus('Success');
            } else {
                setStatus('Error');
            }

        } catch (error) {
            console.log(error);
        }

    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value; 

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Username:
                    <input type="text" name="username" id="username" placeholder="Enter your Username" value={user.username} onChange={handleChange} required />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email:
                    <input type="email" name="email" id="email" placeholder="Enter your Email" value={user.email} onChange={handleChange} autoComplete="off" required />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone:
                    <input type="text" name="phone" id="phone" placeholder="Enter your Phone No" value={user.phone} onChange={handleChange} autoComplete="off" required />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message:
                    <textarea name="message" id="message" rows={5} placeholder="Enter your Message" value={user.message} onChange={handleChange} autoComplete="off" required />
                </label>
            </div>

            <div>
                {status === 'Success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'Error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
                <button type="submit">Send Message</button>
            </div>
        </form>
    )
}

export default ContactForm;