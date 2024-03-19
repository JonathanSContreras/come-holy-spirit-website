import React, { useState, useEffect } from 'react';

const apiKey = '0f0537f7b3377c5c91908a2e1f237dd6';
// const url = 'https://api.scripture.api.bible/v1/bibles';
const url = `https://beta.ourmanna.com/api/v1/get?format=json&order=daily`

const APITEST = () => {
    const [verse, setVerse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(url, {
                    headers: {
                        // 'api-key': apiKey,
                        'accept': 'application/json'
                        // Add other headers if required
                    },
                });

                if (!result.ok) {
                    throw new Error('Failed to fetch data');
                }

                const json = await result.json();
                console.log(json);
                setVerse(json.verse.details.text + ' ' + json.verse.details.reference + ' ' + json.verse.details.version)
                // setVerse(json.data[53].name);
                // Do something with the response data
            } catch (error) {
                console.error('Error fetching data:', error.message);
                // Handle error, show a user-friendly message, etc.
            }
        };

        fetchData();
    }, []);

    return (
        <div className='APITest'>
            Daily Verse of the Day: {verse}
        </div>
    );
};

export default APITEST;
