const { v4: uuidv4 } = require('uuid');
const { pool } = require('./db/connection');

const getPlayers = async(req, response) => {
  pool.query('SELECT * FROM public.players', async(errs, res) => {
    response.send(res.rows);
  });
};

const getPlayerById = async(req, response) => {
  const { id } = req.params.id;
  pool.query('SELECT * FROM public.players WHERE "Id" = $1', [id], async(errs, res) => {
    response.send(res.rows[0]);
  });
};

const savePlayers = async(req, response) => {
  // destructurar objeto
  const { fullName, teamId, typeId } = req.body;
  const id = uuidv4();
  pool.query('INSERT INTO public.players ("Id","FullName","TeamId","TypeId") VALUES ($1,$2,$3,$4)', [id, fullName, teamId, typeId], async(errs, res) => {
    response.send('User Added Succesfully');
  });
};

const deletePlayers = async(req, response) => {
  const { id } = req.params.id;
  pool.query('DELETE FROM public.players WHERE "Id" = $1', [id], async(errs, res) => {
    response.send('User Deleted Succesfully');
  });
};

const updatePlayers = async(req, response) => {
  const { id } = req.params.id;
  const { fullName, teamId, typeId } = req.body;
  pool.query('UPDATE public.players SET "FullName" = coalesce($1,"FullName"),"TeamId" = coalesce($2,"TeamId"),"TypeId" = coalesce($3,"TypeId") WHERE "Id" = $4', [fullName, teamId, typeId, id], async(errs, res) => {
    response.send('User Updated Succesfully');
  });
};

module.exports = {
  getPlayers,
  getPlayerById,
  savePlayers,
  deletePlayers,
  updatePlayers,
};
