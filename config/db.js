// config/db.js

const mongo_uri = require('.env')
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionString = mongo_uri ;
        await mongoose.connect(connectionString);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
