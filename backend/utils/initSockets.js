const { Server } = require("socket.io");

const initSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: true,
            credentials: true
        }
    });

    let connectedUsers = {}; // Object to store socket IDs mapped to user IDs

    // Socket.IO connection handler
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Listen for the "userId" event to receive the user ID from the client
        socket.on("userId", (userId) => {
            // Associate the user ID with the socket ID
            connectedUsers[userId] = socket.id;

            // Emit the user ID and socket ID back to the client
            socket.emit("userIdAndSocketId", { userId, socketId: socket.id });
        });

        // Example event handler
        socket.on("message", (data) => {
            console.log(`Message received: ${data}`);
            socket.emit('message', 'Hello from server!');
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
            
            // Find the user ID associated with the disconnected socket
            const disconnectedUserId = Object.keys(connectedUsers).find(
                (userId) => connectedUsers[userId] === socket.id
            );

            if (disconnectedUserId) {
                // Remove the association between the user ID and socket ID
                delete connectedUsers[disconnectedUserId];
            }
        });
    });

    return { io, connectedUsers }; // Return io instance and connectedUsers object
};

module.exports = { initSocket };
