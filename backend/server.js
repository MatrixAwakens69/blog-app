const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log(`Server running on port ${PORT}`);

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => {
        console.log("Connected to MongoDB");
    }))
    .catch(err => console.log(err));
