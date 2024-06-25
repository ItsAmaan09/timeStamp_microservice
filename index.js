const express = require('express');

const dateRoutes = require('./routes/dateRoutes');

const app = express();

app.use(express.json());

app.use('/api', dateRoutes);

app.listen(3100,()=>{
    console.log('Server is running...')
});