const cors = require('cors');

let corsOptions = {
  origin: 'https://accounts.google.com',
  optionsSuccessStatus: 200,
  // some legacy browsers (IE11, various SmartTVs) choke on 204
};
cors(corsOptions);

module.exports = cors;
