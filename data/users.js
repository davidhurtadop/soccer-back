const { v4: uuidv4 } = require('uuid');
const { pool } = require('./db/connection');

const getUsers = async(req, response) => {
  pool.query('SELECT * FROM public.users', async(errs, res) => {
    response.send(res.rows);
  });
};

const getUserById = async(req, response) => {
  const { id } = req.params.id;
  pool.query('SELECT * FROM public.users WHERE "Id" = $1', [id], async(errs, res) => {
    response.send(res.rows[0]);
  });
};

const saveUsers = async(req, response) => {
  // destructurar objeto
  const { name, login, pass } = req.body;
  const id = uuidv4();
  pool.query('INSERT INTO public.users ("Id","FullName","Login","Pass") VALUES ($1,$2,$3,$4)', [id, name, login, pass], async(errs, res) => {
    response.send('User Added Succesfully');
  });
};

const deleteUsers = async(req, response) => {
  const { id } = req.params.id;
  pool.query('DELETE FROM public.users WHERE "Id" = $1', [id], async(errs, res) => {
    response.send('User Deleted Succesfully');
  });
};

const updateUsers = async(req, response) => {
  const { id } = req.params.id;
  const { name, login, pass } = req.body;
  pool.query('UPDATE public.users SET "FullName" = coalesce($1,"FullName"),"Login" = coalesce($2,"Login"), "Pass" = coalesce($3,"Pass") WHERE "Id" = $4', [name, login, pass, id], async(errs, res) => {
    response.send('User Updated Succesfully');
  });
};

module.exports = {
  getUsers,
  getUserById,
  saveUsers,
  deleteUsers,
  updateUsers,
};
