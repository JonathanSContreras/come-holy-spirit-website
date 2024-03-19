import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import LargeBackground from '../../assets/background-imgs/background-large.png';
import MediumBackground from '../../assets/background-imgs/background-medium.png';
import SmallBackground from '../../assets/background-imgs/background-small.png';

const url = `https://beta.ourmanna.com/api/v1/get?format=json&order=daily`

function Homepage() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    // daily verse stuff
    const [verse, setVerse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(url, {
                    headers: {
                        'accept': 'application/json'
                    },
                });

                if (!result.ok) {
                    throw new Error('Failed to fetch data');
                }

                const json = await result.json();
                console.log(json);
                setVerse({
                    text: json.verse.details.text,
                    reference: json.verse.details.reference
                })
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    
    const ReactTypingEffectDemo = () => {
        const staticText = "TILL ALL HAVE ";
        const texts = ["SEEN", "HEARD"];
        
        const totalTextLength = staticText.length + texts.join("").length;
        const threshold = 20; // Adjust threshold value as needed
        
        return (
            <h1 style={{ fontFamily: "Cinzel", color: 'black', fontSize: "40px", textAlign: 'center' }}>
                {totalTextLength > threshold ? <br /> : null}
                {staticText}
                <ReactTypingEffect
                    text={texts}
                    speed={400}
                    eraseDelay={700}
                    typingDelay={700}
                    cursorRenderer={cursor => <span>{cursor}</span>}
                    displayTextRenderer={(text, i) => (
                        <span key={i} style={{ color: 'black', fontFamily: 'Cinzel', fontWeight: 'normal' }}>
                            {text.split('').map((char, index) => (
                                <span key={index}>{char}</span>
                            ))}
                        </span>
                    )}
                />
            </h1>
        );
    };

    const handleContactButtonClick = () => {
        setShowContactForm(true);
    };

    const handleCloseContactForm = () => {
        setShowContactForm(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xnqezgkk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Reset form data
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });

                // Close the contact form
                setShowContactForm(false);

                alert('Form submitted successfully!');
            } else {
                alert('Error submitting form!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form!');
        }
    };

    const [backgroundImage, setBackgroundImage] = useState(SmallBackground);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setBackgroundImage(SmallBackground);
            } else if (window.innerWidth <= 1024) {
                setBackgroundImage(MediumBackground);
            } else {
                setBackgroundImage(LargeBackground);
            }
        };

        // Initial setup
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                textAlign: 'center',
                minHeight: '100vh', // Ensure the div covers athe entire viewport
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 20px', // Add padding to the sides for mobile devices
                position: 'relative', // Ensure the modal overlay is positioned correctly
            }}
        >
        {/* Logo */}
        {/* <div style={{ position: 'absolute', top: '50px', left: '50%', transform: 'translateX(-50%)' }}>
            <img src={Logo} alt="Logo" style={{ width: '250px', height: 'auto' }} />
        </div>

        <div style={{ fontSize: "18px", marginBottom: '20px', textAlign: 'center' }}>
            <div style ={{fontSize: '10px', width: '50%', margin: '0 auto'}}>
                <p style={{fontWeight:'bold'}}>Daily Verse:</p>
                <p>{'"'+verse.text+'"'}</p>
                <p>{verse.reference}</p>    
            </div>
            <ReactTypingEffectDemo /> 
            <p>This page is under construction.</p>
            <p>We appreciate your patience while we work on improving this page.</p>
            <button style={{ border: '1px solid black', padding: '5px 20px', backgroundColor: 'transparent', color: 'black', borderRadius: '10px' }} onClick={handleContactButtonClick}>Contact Us</button> 
        </div> */}

        {/* Contact form modal */}
        {showContactForm && (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
                    backdropFilter: 'blur(10px)', // Apply blur effect to the background
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 999, // Ensure the modal is on top of other content
                }}
            >
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '80%', width: '500px' }}> {/* Adjust maxWidth and width */}
                    <h2>Contact Form</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>Name:</span>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }} />
                        </label>
                        <label style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>Email:</span>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }} />
                        </label>
                        <label style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>Message:</span>
                            <textarea name="message" value={formData.message} onChange={handleChange} style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}></textarea>
                        </label>
                        <button type="submit" style={{ padding: '8px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
                    </form>
                    <button onClick={handleCloseContactForm} style={{ marginTop: '10px', padding: '8px', backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>Close</button>
                </div>
            </div>
        )}
        </div>
    );
}

export default Homepage;
