const { v4: uuidv4 } = require('uuid');
const { pool } = require('./db/connection');

const getTeams = async(req, response) => {
  pool.query('SELECT * FROM public.teams', async(errs, res) => {
    response.send(res.rows);
  });
};

const getTeamById = async(req, response) => {
  const { id } = req.params.id;
  pool.query('SELECT * FROM public.teams WHERE "Id" = $1', [id], async(errs, res) => {
    response.send(res.rows[0]);
  });
};

const saveTeams = async(req, response) => {
  // destructurar objeto
  const { name, logo } = req.body;
  const id = uuidv4();
  pool.query('INSERT INTO public.teams ("Id","Name","Logo") VALUES ($1,$2,$3)', [id, name, logo], async(errs, res) => {
    response.send('User Added Succesfully');
  });
};

const deleteTeams = async(req, response) => {
  const { id } = req.params.id;
  pool.query('DELETE FROM public.teams WHERE "Id" = $1', [id], async(errs, res) => {
    response.send('User Deleted Succesfully');
  });
};

const updateTeams = async(req, response) => {
  const { id } = req.params.id;
  const { name, logo } = req.body;
  pool.query('UPDATE public.teams SET "Name" = coalesce($1,"Name"),"Logo" = coalesce($2,"Logo") WHERE "Id" = $4', [name, logo, id], async(errs, res) => {
    response.send('User Updated Succesfully');
  });
};

module.exports = {
  getTeams,
  getTeamById,
  saveTeams,
  deleteTeams,
  updateTeams,
};
