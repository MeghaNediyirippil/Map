const mongoose = require('mongoose');
const History = require('../Model/historySchema');  

const connectionString = process.env.DATABASE;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log('MongoDB connection successful');
    try {
        await History.collection.dropIndex('userId_1');
        console.log('Dropped the unique index on userId');
    } catch (err) {
        if (err.code !== 27) {
            console.error('Error dropping index:', err);
        } else {
            console.log('No unique index on userId to drop');
        }
    }
}).catch((err) => {
    console.log(`MongoDB connection failed due to: ${err}`);
});



