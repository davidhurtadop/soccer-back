const { Pool } = require('pg')
const { v4: uuidv4 } = require('uuid');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'soccerAppBD',
    password: 'admin123',
    port: 5432,
})

const getUsers = async(req, response) => {
    pool.query('SELECT * FROM public."Users"', async(errs, res) => {
        response.send(res.rows)
    })
}

const getUserById = async(req, response) => {
    const id = req.params.id;
    pool.query('SELECT * FROM public."Users" WHERE "id" = $1', [id], async(errs, res) => {
        response.send(res.rows[0])
    })
}

const saveUsers = async(req, response) => {
    // destructurar objeto 
    const { name, login, pass } = req.body;
    const id = uuidv4();
    pool.query('INSERT INTO public."Users" ("id","full_name","login","pass") VALUES ($1,$2,$3,$4)', [id, name, login, pass], async(errs, res) => {
        response.send('User Added Succesfully')
    })
}

const deleteUsers = async(req, response) => {
    const id = req.params.id;
    pool.query('DELETE FROM public."Users" WHERE "id" = $1', [id], async(errs, res) => {
        response.send('User Deleted Succesfully')
    })
}

const updateUsers = async(req, response) => {
    const id = req.params.id;
    const { name, login, pass } = req.body;
    pool.query('UPDATE public."Users" SET "full_name" = coalesce($1,"full_name"),"login" = coalesce($2,"login"), "pass" = coalesce($3,"pass") WHERE "id" = $4', [name, login, pass, id], async(errs, res) => {
        response.send('User Updated Succesfully')
    })
}

module.exports = {
    getUsers,
    getUserById,
    saveUsers,
    deleteUsers,
    updateUsers
}