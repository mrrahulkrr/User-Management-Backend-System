// config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionString = "mongodb+srv://rahulkrgupta18032003:Rahul%402003@cluster0.ns3awbj.mongodb.net/"
        await mongoose.connect(connectionString);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
