const express = require('express');
const path = require('path');

const app = express();
const PORT = 3500;

app.use(express.static('public'));


app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));

app.listen(PORT, () => console.log(`server running in http://localhost:${PORT}`));