const { v4: uuidv4 } = require('uuid');
const { pool } = require('./db/connection');

const getTournaments = async(req, response) => {
  pool.query('SELECT * FROM public.tournaments', async(errs, res) => {
    response.send(res.rows);
  });
};

const getTournamentById = async(req, response) => {
  const { id } = req.params.id;
  pool.query('SELECT * FROM public.tournaments WHERE "Id" = $1', [id], async(errs, res) => {
    response.send(res.rows[0]);
  });
};

const saveTournaments = async(req, response) => {
  // destructurar objeto
  const { name, userId } = req.body;
  const id = uuidv4();
  pool.query('INSERT INTO public.tournaments ("Id","Name","UserId") VALUES ($1,$2,$3)', [id, name, userId], async(errs, res) => {
    response.send('User Added Succesfully');
  });
};

const deleteTournaments = async(req, response) => {
  const { id } = req.params.id;
  pool.query('DELETE FROM public.tournaments WHERE "Id" = $1', [id], async(errs, res) => {
    response.send('User Deleted Succesfully');
  });
};

const updateTournaments = async(req, response) => {
  const { id } = req.params.id;
  const { name, userId } = req.body;
  pool.query('UPDATE public.tournaments SET "Name" = coalesce($1,"Name"),"UserId" = coalesce($2,"UserId") WHERE "Id" = $4', [name, userId, id], async(errs, res) => {
    response.send('User Updated Succesfully');
  });
};

module.exports = {
  getTournaments,
  getTournamentById,
  saveTournaments,
  deleteTournaments,
  updateTournaments,
};
