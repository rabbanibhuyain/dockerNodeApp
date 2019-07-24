const express = require('express');

var os = require("os");

const app = express();
app.use('/images', express.static(__dirname + "/images"));
const port = 80;
var hostname = os.hostname();
var appVersion= "2.1";
app.get('/', (req, res) => {
    html = " <div style='text-align:center;margin:20px;'> <img src='./images/kubernetes.png' width='30%' alt='Insight'><h1>Welcome!</h1><h2>Version : "+appVersion+"</h2> <h2>Machine: "+hostname+"</h2></div><br/><br/><p></p><div style='text-align:center;margin:20px;'> <img src='./images/lunchgnlearn.png' width='20%' alt='Insight'>"
    res.send(html);
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
