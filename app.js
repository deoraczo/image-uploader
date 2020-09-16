const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

app.get('/test', (req, res) => {
    res.send("Helo");
})

app.listen(PORT, () => {
    console.log('Application runnign on port: ' + PORT);
})