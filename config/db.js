const mongoose = require('mongoose');

async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb+srv://akb6406:baghel@cluster0.vbbxlek.mongodb.net/?retryWrites=true&w=majority/BOOK-STORE', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

connectToMongoDB();

module.exports = mongoose;


// await mongoose.connect('mongodb+srv://akb6406:baghel@cluster0.vbbxlek.mongodb.net/BOOK-STORE', {
