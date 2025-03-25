import React from 'react';
const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const response = await fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
            }),
        });

        if (response.ok) {
            alert('Message sent!');
            form.reset();
        } else {
            alert('Something went wrong, please try again.');
        }
    };

    return (
        <section id="contact" className='py-5'>
        <div className='container'>
            <h2 className='text-center'>Contact Me</h2>
            <form onSubmit={handleSubmit} className='contact-form'>
            <div className='form-group'>
                <label>Name:</label>
                <input type="text" name="name" required />
           
                </div>
                <div  className='form-group'>
                <label>Email:</label>
                <input type="email" name="email" required />
                </div>
                <div  className='form-group'>
                <label>Comment:</label>
                <textarea name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className='btn btn-primary'>Send</button>
                
            </form>
            </div>
        </section>
    );
};

export default Contact;