const SocketIO = require("socket.io");

const handleSocket = (server) => {
  const io = new SocketIO.Server();

  io.on("connection", (socket) => {
    // when a user connects

    // event handlers

    socket.on("disconnect", () => {
      // when user disconnects
    });
  });
};

module.exports = { handleSocket };
