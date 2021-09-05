const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const usersRoutes = require('./Routes/users');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "159751",
    database: "makorusers"
})


app.get('/getall', (req, res) =>{
    const sqlSelect = "SELECT * FROM makorusers.users";
    db.query(sqlSelect, (err, result) =>{
        res.send(result);
    })
})

app.post('/insert', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const sqlInsert = "INSERT INTO makorusers.users (id, name, email) VALUES (?,?,?)"
    db.query(sqlInsert, [id, name, email], (err, result) => {
        if (err) {
            res.status(500).send("ERROR, try later");
            return;
        }
        res.send("Register successfully.")
    })

})


app.listen(process.env.PORT || 3006, () => { console.log("server is running..") });
