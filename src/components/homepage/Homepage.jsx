import React, { useState, useEffect } from 'react';
import LargeBackground from '../../assets/background-imgs/background-large.png';
import MediumBackground from '../../assets/background-imgs/background-medium.png';
import SmallBackground from '../../assets/background-imgs/background-small.png';

function Homepage() {
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
        </div>
    );
}

export default Homepage;
