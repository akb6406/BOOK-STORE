const mongoose = require('mongoose');
require('dotenv').config();

async function connectToMongoDB() {
    try {
        await mongoose.connect(
            process.env.MONGOD_CONNECT_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

connectToMongoDB();

module.exports = mongoose;
