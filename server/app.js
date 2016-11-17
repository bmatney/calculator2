var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var path = require('path');


app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
    console.log('server is listening on port ' + app.get('port'));
});

// this points to the index.js which in turn sets the default
// file that the browser should look for.
app.use('/', index);

// body-parser allows us to pull specific information from the index.html
app.use(bodyParser.urlencoded({
    extended: true
}));

// pulls the object from the url localhost://5000/calculate
// and then looks for the "type".
// Once it determines the type from the button clicked,
// it will then perform the corresponding operation
app.post('/calculate', function(req, res) {
    switch (req.body.type) {
        case 'add':
            var answer = parseInt(req.body.x) + parseInt(req.body.y);
            break;
        case 'subtract':
            answer = parseInt(req.body.x) - parseInt(req.body.y);
            break;
        case 'multiply':
            answer = parseInt(req.body.x) * parseInt(req.body.y);
            break;
        case 'divide':
            answer = parseInt(req.body.x) / parseInt(req.body.y);
            break;
    }
    console.log(answer);

    // at this point we are sending back the results of our operation
    // to the client.js.
    var sendAnswer = {
      answer: answer
    };
    res.send(sendAnswer);
});
