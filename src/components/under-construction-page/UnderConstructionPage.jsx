import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import BackgroundImage from '../../assets/background-imgs/church-bg-2.png';
import Logo from '../../assets/come-holy-spirit-logo-black.png';
import { FaInstagram } from "react-icons/fa";


function UnderConstructionPage() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // const ReactTypingEffectDemo = () => {
    //     // const dynamicText = ["בואי רוח הקודש", " Come Holy Spirit"]; // Array containing both Hebrew and English text
    //     // const fonts = ["Heebo", "Bebas Neue"]; // Add more fonts if needed
    //     const englishText = "Come Holy Spirit";
    //     const hebrewText = "בואי רוח הקודש";
    //     const englishFont = "Cinzel"; 
    //     const hebrewFont = "Heebo";
        

    //     return (
    //         // <h1 style={{ fontFamily: 'Heebo', color: 'black', fontSize: "40px", fontWeight: 'bold', textAlign: 'right', display:'flex', justifyContent:'center'}}>
    //         //     <ReactTypingEffect
    //         //         text={dynamicText}
    //         //         speed={75} // Adjust speed here (e.g., 50 milliseconds per character)
    //         //         cursorRenderer={cursor => <span>{cursor}</span>}
    //         //         displayTextRenderer={(text, i) => (
    //         //             <span key={i} style={{ color: 'black', fontWeight: 'bold' }}>
    //         //                 {text.split('').map((char, index) => (
    //         //                     <span key={index} style={{ fontFamily: "Heebo" }}>{char}</span>
    //         //                 ))}
    //         //             </span>
    //         //         )}
    //         //     />
    //         // </h1>
    //         <h1 style={{ color: 'black', fontSize: "40px", textAlign: 'right', display:'flex', justifyContent:'center'}}>
    //         <ReactTypingEffect
    //             text={[hebrewText, englishText]} // Array containing both Hebrew and English text
    //             speed={75} // Adjust speed here (e.g., 50 milliseconds per character)
    //             cursorRenderer={cursor => <span>{cursor}</span>}
    //             displayTextRenderer={(text, i) => (
    //                 <span key={i} style={{ color: 'black', fontFamily: i === 0 ? hebrewFont : englishFont, fontWeight: i === 0 ? 'bold' : 'normal' }}>
    //                     {text.split('').map((char, index) => (
    //                         <span key={index}>{char}</span>
    //                     ))}
    //                 </span>
    //             )}
    //         />
    //     </h1>
    //     );
    // };
    // for multiple words with different font styles
    // const ReactTypingEffectDemo = () => {
    //     const staticText = "TILL ALL HAVE";
    //     const texts = [
    //         // { text: "Holy Spirit", font: "Cinzel", fontWeight: "normal", color: "black" }, // English
    //         // { text: "Espíritu Santo", font: "Bebas Neue", fontWeight: "normal", color: "black" }, // Spanish
    //         // { text: "רוח הקודש", font: "Heebo", fontWeight: "bold", color: "black" } // Hebrew
    //         // { text: "Holy Spirit", font: "Cinzel", fontWeight: "normal", color: "black" }, // English
    //         // { text: "Espíritu Santo", font: "Cinzel", fontWeight: "normal", color: "black" }, // Spanish
    //         // { text: "רוח הקודש", font: "Cinzel", fontWeight: "normal", color: "black" } // Hebrew
    //         // { text: "TILL", font: "Cinzel", fontWeight: "normal", color: "black" },
    //         // { text: "ALL", font: "Cinzel", fontWeight: "normal", color: "black" }, 
    //         // { text: "HAVE", font: "Cinzel", fontWeight: "normal", color: "black" },
    //         { text: "SEEN", font: "Cinzel", fontWeight: "normal", color: "black" },
    //         { text: "HEARD", font: "Cinzel", fontWeight: "normal", color: "black" }
    //     ];

    //     return (
    //         <h1 style={{fontFamily:"Cinzel", color: 'black', fontSize: "40px", textAlign: 'right', display: 'flex', justifyContent: 'center' }}>
    //             {staticText}
    //             <ReactTypingEffect
    //                 text={texts.map(({ text }) =>text)} // Array containing all text
    //                 speed={400}
    //                 eraseDelay={700} 
    //                 typingDelay={700}

    //                 cursorRenderer={cursor => <span>{cursor}</span>}
    //                 displayTextRenderer={(text, i) => (
    //                     <span key={i} style={{ color: texts[i].color, fontFamily: texts[i].font, fontWeight: texts[i].fontWeight }}>
    //                         {text.split('').map((char, index) => (
    //                             <span key={index}>{char}</span>
    //                         ))}
    //                     </span>
    //                 )}
    //             />
    //         </h1>
    //     );
    // };
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

    return (
        <div
            style={{
                backgroundImage: `url(${BackgroundImage})`, // Replace with your image path
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
            {/* Logo in the corner */}
            <div style={{ position: 'absolute', top: '50px', left: '50%', transform: 'translateX(-50%)' }}>
                <img src={Logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
            </div>

            {/* <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} style={{ marginTop: '20px', color: 'white' }} />
            </a> */}

            <div style={{ fontSize: "18px", marginBottom: '20px', textAlign: 'center' }}>
                <ReactTypingEffectDemo /> {/* Render the ReactTypingEffectDemo component */}
                <p>This page is under construction.</p>
                <p>We appreciate your patience while we work on improving this page.</p>
                <button style={{ border: '1px solid black', padding: '5px 20px', backgroundColor: 'transparent', color: 'black', borderRadius: '10px' }} onClick={handleContactButtonClick}>Contact Us</button> {/* Contact button */}
            </div>

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

export default UnderConstructionPage;
