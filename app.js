const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const { config } = require("dotenv");
const { getIPAddress } = require("./utils/network");
const { handleSocket } = require("./utils/socketHandler");

config({ path: ".env" });
const { connect } = require("mongoose");
connect("mongodb://localhost/chatgram");
const app = express();
const PORT = process.env.PORT || 3300;
const server = http.createServer(app);
handleSocket(server);

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

server.listen(PORT, () => {
  console.log(`Server is running at http://${getIPAddress()}:${PORT}`);
});
