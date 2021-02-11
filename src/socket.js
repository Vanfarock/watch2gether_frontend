import socketIOClient from "socket.io-client";

const socket = socketIOClient.connect(process.env.REACT_APP_BACKEND_ENDPOINT);

export default socket;