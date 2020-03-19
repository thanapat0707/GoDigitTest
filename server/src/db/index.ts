import * as mysql from 'mysql'
import customer from './customer'

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'godigit',
})

connection.connect( err => {
    if(err) throw err 
    console.log('Connect')
})

export const Query = (query: string, value?: Array< string | number >) => {
    return new Promise<Array<any>>((resolve, reject) => {
        connection.query(query, value, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        })
    });
};

export default {
    customer
}       