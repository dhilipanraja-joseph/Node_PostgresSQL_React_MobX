const client = require('../models/database');
const express = require('express');
const router = express.Router();
// const pg = require('pg');
const path = require('path');

router.route('/')
      .get((req, res) => {
        const results = [];
        // console.log(req,res);
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM items ORDER BY id ASC;');
        // Stream results back one row at a time
        query.on('row', (row) => {
          results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
          // done();
          return res.json(results);
        });
      })
      .post((req, res) => {
        const results = [];
        const data = {text: req.body.text, complete: false};
        // console.log(data);
        // client.connect();
        client.query('INSERT INTO items(text, complete) values($1, $2)', [data.text, data.complete]);
        const query = client.query('SELECT * FROM items ORDER BY id ASC');
        query.on('row', (row) => {
          results.push(row);
        });
        query.on('end', () => {
          // done();
          return res.json(results);
        });
      })


module.exports = router;
