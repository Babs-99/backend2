const mongoose = require('mongoose');
const uri = "mongodb+srv://drharmattan:O2AF3CDG43FUmcSZ@boxtobox.fmfmxli.mongodb.net/?retryWrites=true&w=majority&appName=boxtobox";

async function mongoDBConnect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = mongoDBConnect;