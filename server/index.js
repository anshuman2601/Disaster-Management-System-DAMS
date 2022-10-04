const express = require("express");
const app = express();


app.get('/login', (req, res) => {
    console.log(req);
    res.send('Hello World!')
})

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!')
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


