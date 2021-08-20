var express = require('express')
var router = express.Router()

const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'soccerAppBD',
    password: 'admin123',
    port: 5432,
})

router.get('/', async(req, res) => {
    pool.query('SELECT * FROM public."Users"', async(errs, resu) => {
        console.log(errs, resu.rows)
        res.send(resu.rows)
    })
})

router.post('/', async(req, res) => {
    pool.query('INSERT INTO public."Users" ("Id","Full_Name","login","password") VALUES ($1,$2,$3,$4)', [4, "Mia", null, null], async(errs, resu) => {
        console.log(errs, resu)
        res.send('User Added Succesfully')
    })
})

router.delete('/', async(req, res) => {
    pool.query('DELETE FROM public."Users" WHERE "Id" = $1', [4], async(errs, resu) => {
        console.log(errs, resu)
        res.send('User Deleted Succesfully')
    })
})

router.put('/', async(req, res) => {
    pool.query('UPDATE public."Users" SET "login" = $1 WHERE "Id" = $2', ["mia@correo.com", 4], async(errs, resu) => {
        console.log(errs, resu)
        res.send('User Updated Succesfully')
    })
})

module.exports = router