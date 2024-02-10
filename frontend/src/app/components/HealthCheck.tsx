'use client'
// components/healthCheck.ts
import React, {useState, useEffect} from 'react';

interface IProps {
    status: string | undefined;
}

const HealthCheck = ({status}: IProps) => {

    if (status == undefined) {
        return <div></div>
    }


    return (
        <div>
            <h2>Health Check</h2>
            <p>Status: {status}</p>
        </div>
    );
};

export default HealthCheck;
