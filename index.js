const server = require('./server.js');
const cors = require("cors");

server.use(cors());

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});