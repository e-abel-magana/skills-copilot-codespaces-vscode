// Create web server that listens on port 3000
// Respond to GET requests to /comments with an array of comments
// Respond to POST requests to /comments with a new comment object

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var comments = [
    {name: 'John', comment: 'Hello World!'},
    {name: 'Jane', comment: 'Hi there!'}
];

app.use(bodyParser.json());

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.post('/comments', function(req, res) {
    var newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

app.listen(3000, function() {
    console.log('Server listening on', 3000);
});