import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to={`/room/${123}`}>Go to room</Link>
        </div>
    );
}