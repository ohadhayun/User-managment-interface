// const express = require('express');
// const db = require('../Models/usersModel');
// const router = express.Router();


// router.get('/getall', (req, res) =>{
//     const sqlSelect = "SELECT * FROM makorusers.users";
//     db.query(sqlSelect, (err, result) =>{
//         res.send(result);
//     })
// });

// router.post('/insert', (req, res) => {
//     const id = req.body.id;
//     const name = req.body.name;
//     const email = req.body.email;
//     const sqlInsert = "INSERT INTO makorusers.users (id, name, email) VALUES (?,?,?)"
//     db.query(sqlInsert, [id, name, email], (err, result) => {
//         if (err) {
//             res.status(500).send("ERROR, try later");
//             return;
//         }
//         res.send("Register successfully.")
//     })

// })

// module.exports = router;