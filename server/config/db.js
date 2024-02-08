const mongoose = require("mongoose");

const connectDB = async () => {
    const connect = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MONGODB CONNECTED : ${connect.connection.host}`.cyan.bold);
};

module.exports = connectDB;
