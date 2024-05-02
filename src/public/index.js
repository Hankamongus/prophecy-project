const express = require('express');
const { MongoClient } = require('mongodb');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5173;
const uri = 'mongodb://localhost:5173/mydatabase';

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
    .then(() => {
        console.log('Connected to MongoDB');
        const db = client.db(); 
        
        app.get('/', (req, res) => {
            fs.readFile('index.html', 'utf8', (err, data) => {
                if (err) {
                    res.status(500).send('Error loading index.html');
                    return;
                }
                res.send(data);
            });
        });

        // Example route 
        app.get('/hello', (req, res) => {
            res.send('Hello, MongoDB!');
        });

        // Define API endpoints
        app.post('/api/data', (req, res) => {
            const requestData = req.body; 
            res.send('Data received and processed');
        });

        app.get('/api/data', (req, res) => {
            const requestData = req.body; // Access the data sent in the request body
    // Process the data (e.g., store it in MongoDB)
    res.send('Data received and processed');
        });

         
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB', err));
