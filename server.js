var fs = require('fs');
var express = require('express');
var app = express();
var formidable = require('express-formidable');

app.use(express.static("public"));
app.use(formidable());
app.get("/get-posts", function (request, response) { 
    response.sendFile(__dirname + '/data/posts.json')
});

app.post("/create-post", function (request, response) {

    fs.readFile(__dirname + '/data/posts.json', function (error, file) {
        if (error) {
            console.log("Desculpe, mas o sistema nao conseguiu escrever o seu arquivo, tente novamente mais tarde.");
        }
        
        var parsedJson = JSON.parse(file);
        var key = Date.now();
        var value = request.fields.blogpost;

        parsedJson[key] = value;
        var data = JSON.stringify(parsedJson);
        fs.writeFile(__dirname + '/data/posts.json', data, function (error) {
        // do something
        });
    });
});

app.listen(3000,function () {
 console.log('Server is listening on port 3000. Ready to accept requests!');  
});
