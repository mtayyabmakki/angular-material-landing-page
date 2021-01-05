var express = require('express');
var app = express();

// app.use(express.static('./dist/my-app.json'));

// app.get('/*', function(req, res) {res.sendFile('index.html', {root: 'dist/my-app.json/'});});
  
app.use(express.static(__dirname + '/dist/my-app'));

app.post('/*', function(req, res){
    res.sendFile(__dirname +  '/dist/my-app/index.html');
});
app.listen(8080, ()=> {console.log('server listening at 8080');});