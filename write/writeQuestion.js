let express = require('express');
let app = express();
let path = require('path');
let helmet = require('helmet');
const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/mydb', {useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connected error:'));
db.once('open', function() {
    console.log("We are connected!");
});

const questionsSchema = new mongoose.Schema({
    questionName: String,
    timeLimit: Number,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    answer: String
});

var questionDetails= mongoose.model('questionFormat', questionsSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

let port = 5500;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/question.html'));
});

app.post('/saveQuestionFormat', function(req, res) {
    // The data is now here
    console.log(req.body);
    var qname = req.body.questionName;
    var tl = req.body.timeLimit;
    var opt1= req.body.opt1;
    var opt2= req.body.opt2;
    var opt3= req.body.opt3;
    var opt4= req.body.opt4;
    var ans = req.body.answer.value;
    var q= new questionDetails({questionName: qname, timeLimit: tl,answer: ans, option1: opt1, option2: opt2, option3: opt3, option4: opt4,});

    q.save( function(err) {
    if(err) return console.log(err);
    });
    
})

app.listen( port, () => {
    console.log(`Listening on Port: ${port}`)
});