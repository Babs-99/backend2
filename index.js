const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://babalolaawe:r6Bt7pTsdeMSuqYN@cluster0.v5flxtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function mongoDBConnect() {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err)
    }
}

    module.exports = mongoDBConnect;