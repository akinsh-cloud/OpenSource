const app = require('./src/app');

//creating connection to database
const connectDB = require('./src/db/db');
connectDB()
.then(() => { 
    console.log('Database connected, starting server...');
}).catch((err) => {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
});

//loading environment variables
const dotenv = require('dotenv');
dotenv.config();

//starting the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});