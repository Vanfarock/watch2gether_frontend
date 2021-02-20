import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
import socket from '../../socket';

export default function Room(props) {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        socket.emit('entered_room', props.match.params.id);

        socket.on('new_user_room', userData => {
            console.log(userData.id);
        })

        socket.on('video_data', data => {
            setVideoUrl(data.url);
        });

        return () => {
            socket.emit('left_room');
        }
    });

    return (
        <div>
            <div>
                {/* <ReactPlayer url={videoUrl} /> */}
            </div>
            <div>
                <ul>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                </ul>
            </div>
        </div>
    );
}