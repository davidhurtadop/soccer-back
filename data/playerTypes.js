const { pool } = require('./db/connection');

const getPlayerTypes = async(req, response) => {
  pool.query('SELECT * FROM public.player_types', async(errs, res) => {
    response.send(res.rows);
  });
};

module.exports = {
  getPlayerTypes,
};
