import React, { useState, useEffect } from 'react';
import socket from '../../socket';

export default function Room(props) {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        socket.emit('entered_room', props.match.params.id);

        socket.on('video_data', data => {
            setVideoUrl(data.url);
        });

        return () => {
            socket.emit('left_room');
        }
    });

    return (
        <>
            <h1>Room</h1>
            <a href={videoUrl} hidden={!videoUrl}>Enter video</a>
        </>
    );
}