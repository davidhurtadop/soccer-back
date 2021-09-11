const dataPlayerType = require('../data/playerTypes');

const getPlayerTypes = (req, response) => {
  dataPlayerType.getPlayerTypes(req, response);
};

module.exports = {
  getPlayerTypes,
};
