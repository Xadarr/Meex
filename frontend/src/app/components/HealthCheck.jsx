'use client';

import { useState, useEffect } from 'react';

export default function HealthCheck() {
    const [healthStatus, setHealthStatus] = useState('Loading...'); // Initial state with a loading message

    useEffect(() => {
        // Fetch health status from nest API
        fetch('http://localhost:5000/api/health')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Received data from server:', data); // Debugging
                setHealthStatus(data.status);
            })
            .catch((error) => {
                console.error('Error fetching health status:', error);
                setHealthStatus('Error'); // Display an error message
            });
    }, []);

    return (
        <div>
            <h1>Health Check</h1>
            <p>Backend Health: {healthStatus}</p>
        </div>
    );
}
