import React, { useState } from 'react';
import { LinkToRoom } from './styles';

export default function Home() {
    const [roomId, setRoomId] = useState('');

    return (
        <div>
            <h1>Home</h1>
            <input type="text" name="roomId" placeholder="Type room id" onChange={(e) => setRoomId(e.target.value) } />
            <br />
            <LinkToRoom to={`/room/${roomId}`} disabled={!roomId}>Go to room</LinkToRoom>
        </div>
    );
}