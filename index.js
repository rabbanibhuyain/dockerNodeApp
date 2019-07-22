const express = require('express');
var os = require("os");

const app = express();
const port = 9000;
var hostname = os.hostname();
app.get('/', (req, res) => {
    html = "<div style='text-align:center;margin:20px;'><img src='https://www.insight.com/content/dam/insight-web/logos/global-nav.svg' width='30%' alt='Insight'> <h1>Hello</h1><h2>Version : 1.0</h2> <h2>Machine Name: "+hostname+"</h2></div>"
    res.send(html);
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
