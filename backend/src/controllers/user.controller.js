import { pool } from '../db.js'


export const getUser = (req, res) => res.send('Obtenindo empleados')




export const createUser = async (req, res) => {
    const { name, email, password } = req.body
    const [rows] = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password])
    res.send({
        id: rows.insertId,
        name,
        email,
        password
    })
}



export const updateUser = (req, res) => res.send('Actualizando empleados')



export const deleteUser = (req, res) => res.send('Eliminando empleados')