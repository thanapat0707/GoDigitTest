import express from 'express';
import db from '../db';
import { check, validationResult } from 'express-validator';

const router = express.Router();

router.get('/', async (req, res ) => {
    try {
        let results = await db.customer.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res ) => {
    let customerID = Number(req.params.id);
    try {
        let results = await db.customer.one(customerID);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/', [
    check('firstname').isLength({ min: 3 }),
    check('lastname').isLength({ min: 3 }),
    check('telno').isLength({ max: 10 })
], async (req: any, res: any) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    try {

        const firstname  = req.body.firstname
        const lastname = req.body.lastname
        const telno   = req.body.telno

        let results = await db.customer.post(firstname, lastname, telno).then( result => {
            console.log('result: ', result);
        });
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/', [
    check('firstname').isLength({ min: 3 }),
    check('lastname').isLength({ min: 3 }),
    check('telno').isLength({ max: 10 })
], async (req: any, res: any) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    try {

        const customerID  = req.body.customerID
        const firstname  = req.body.firstname
        const lastname = req.body.lastname
        const telno   = req.body.telno

        let results = await db.customer.put(firstname, lastname, telno, customerID).then( result => {
            console.log('result: ', result);
        });
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res ) => {
    let customerID = Number(req.params.id);
    try {
        let results = await db.customer.destroy(customerID).then( result => {
            console.log('result: ', result);
        });
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;