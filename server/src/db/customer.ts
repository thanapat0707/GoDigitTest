import { Query } from './index';

const all = async () => Query('SELECT * FROM customer');
const one = async (id: number) => Query('SELECT * FROM customer WHERE customer_id = ?', [id]);
const post = async (firstname: string, lastname: string, telno: string) => Query('INSERT INTO customer (firstname, lastname, telno)VALUES (?, ?, ?)', [firstname, lastname, telno]);
const put = async (firstname: string, lastname: string, telno: string, customer_id: number) => Query('UPDATE customer SET firstname = ?, lastname = ?, telno = ? WHERE customer_id = ?', [firstname, lastname, telno, customer_id]);
const destroy = async (id: number) => Query('DELETE FROM customer WHERE customer_id = ?', [id]);

export default {
    all,
    one,
    post,
    put,
    destroy,
}