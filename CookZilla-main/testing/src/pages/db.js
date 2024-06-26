import express, { Router } from 'express'
import mysql from 'mysql'
import cors from 'cors'
import Login from './login';

app.use(cors());
// const addCorsHeaders = (req, res, next) => {
//     // Set the Access-Control-Allow-Origin header to allow requests from all origins
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Set the Access-Control-Allow-Methods header to allow specified HTTP methods
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

//     // Call the next middleware function in the stack
//     next(); 
// };

// Attach the middleware function to all routes or a specific route
// app.use(addCorsHeaders);
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cookzilla"
})

app.post('/register', async (req, res) => {
    const data = req.body
    console.log(data);
    const sql= "INSERT INTO login ('username','dob','email','password')  VALUES (?,?,?,?)"; 
    const values = [
        req.body.username,
        req.body.dob,   
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, result) =>{
        if(err) return res.json({Message: "Error in node"});
        return res.json(result);
    })
    res.json(true)
})
app.post('/login', async (req, res) => {
    const user = req.body;
    const sql = "SELECT * FROM login WHERE email = $1 and password = $2";
    db.query(sql, [req.body.email, req.body.password], (err, results) => {
        if (err) return res.json({ Message: "Error in server" });
        if (results.length > 0) {
            return res.json({ Login: true });
        } else {
            return res.json({ Login: false });
        }
    });
});

app.listen(3000,() => {
    console.log("connected to server");

})