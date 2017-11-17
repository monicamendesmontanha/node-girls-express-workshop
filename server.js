var express = require('express');
var app = express();

app.use(express.static("public"));

// app.get('/get-posts', function (req, res) {
//     res.send('Hello there!');
//     console.log('/get-posts')
// });

app.post('/create-post', function (req, res) {
    res.send('Hello there!');
    console.log('/create-post')
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000, Ready to accept requests!')
});
