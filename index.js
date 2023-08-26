require("dotenv").config();
const io = require("socket.io")(process.env.PORT, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    socket.emit("message", data);
  });
});
