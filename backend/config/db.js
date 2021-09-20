const mongoose = require('mongoose');
const db = process.env.MONGO_LINK;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        //lecsapja a további próbálkozások számát
        process.exit(1);
    }
}

module.exports = connectDB;