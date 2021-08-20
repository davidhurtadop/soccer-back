const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'soccerAppBD',
    password: 'admin123',
    port: 5432,
})

const getUsers = (req, response) => {
    pool.query('SELECT * FROM public."Users"', async(errs, res) => {
        response.send(res.rows)
    })
}

const saveUsers = (req, response) => {
    pool.query('INSERT INTO public."Users" ("Id","Full_Name","login","password") VALUES ($1,$2,$3,$4)', [4, "Mia", null, null], async(errs, res) => {
        response.send('User Added Succesfully')
    })
}

const deleteUsers = (req, response) => {
    pool.query('DELETE FROM public."Users" WHERE "Id" = $1', [4], async(errs, res) => {
        response.send('User Deleted Succesfully')
    })
}

const updateUsers = (req, response) => {
    pool.query('UPDATE public."Users" SET "login" = $1 WHERE "Id" = $2', ["mia@correo.com", 4], async(errs, res) => {
        response.send('User Updated Succesfully')
    })
}

module.exports = {
    getUsers,
    saveUsers,
    deleteUsers,
    updateUsers
}