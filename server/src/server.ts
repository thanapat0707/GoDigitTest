import express from 'express';
import { Query } from './db';
import apiRouter from './routes';

const app = express()

app.use(express.json());

app.use('/api/customer', apiRouter);

//Create DB
app.get('/createdb', async (req, res, next) => {
    try {
        let results = Query('CREATE DATABASE IF NOT EXISTS godigit');
        res.send('Success');
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

// Create Table
app.get('/createtable', async (req, res, next) => {
    let sql = `CREATE TABLE IF NOT EXISTS customer(
                customer_id int AUTO_INCREMENT,
                firstname VARCHAR(150) NOT NULL,
                lastname VARCHAR(150) NOT NULL,
                telno VARCHAR(10),
                PRIMARY KEY(customer_id) )`;
    try {
        let results = Query(sql);
        res.send('Success');
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

app.listen(3000, () => {
    console.log('Server is up and listen on 3000 . . .')
})

