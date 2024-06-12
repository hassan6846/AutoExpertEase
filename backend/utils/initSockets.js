const { Server } = require("socket.io");

const initSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: true,
            credentials: true
        }
    });

    // Socket.IO connection handler
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Example event handler
        socket.on("message", (data) => {
            console.log(`Message received: ${data}`);
            socket.emit('message', 'Hello from server!');
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });

    return io; // Return io instance
};

module.exports = { initSocket };
