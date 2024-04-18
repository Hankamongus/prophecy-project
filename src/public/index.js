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
        const db = client.db(); // Get the database object

        // Define routes that use the MongoDB connection

        // Serve the index.html file when someone accesses the root URL
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
            // Handle POST request and fetch data from MongoDB
        });

        app.get('/api/data', (req, res) => {
            // Handle GET request and fetch data from MongoDB
        });

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB', err));
