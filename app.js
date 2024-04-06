const express = require('express');
const app = express();
const route = require('./route/route');
const connectToMongoDB = require('./mongoose');

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Convert JSON to JavaScript object and put into request body
app.use(express.json());

// Middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Use route
app.use(route); 

// Connect to MongoDB
connectToMongoDB();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
