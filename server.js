var express = require('express')
var app = express()

var http = require('http').Server(app);


const EventEmitter = require('events');
app.set('view engine', 'ejs')
var index = require('./routes/routes')


/**
 * body-parser module is used to read HTTP POST data
 * it's an express middleware that reads form's input 
 * and store it as javascript object
 */
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({
    type: "*/*"
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept, Authorization, Content-Length, X-Requested-With,session_key');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
        //respond with 200
        res.sendStatus(200);
        return;
    }
    else {
        //move on
        next();
    }
});

app.use('/', index)
app.listen(4000, function () {
    console.log('Listening on port 4000...')
})


// http.listen(4000, function(){
//     console.log('Server running at port 3000: http://127.0.0.1:4000')
// })