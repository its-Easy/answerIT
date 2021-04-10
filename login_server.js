let express = require('express');
let app = express();
let path = require('path');
let helmet = require('helmet');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

let port = 5500;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/login/login.html'));
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

//login API
app.post('/login', function(req, res) {
    // The data is now here
    console.log(req.body);

    var uname = req.body.username;
    var pass = req.body.password;

    if(uname=='admin') {
    console.log("admin page");
    res.sendFile(path.join(__dirname + "/write/questionFormat.html"));;
    }
    else {
    console.log("Student Page");
    res.sendFile(path.join(__dirname + "/userQuiz/main.html"));;
    }
    
 
})

app.listen( port, () => {
    console.log(`Listening on Port: ${port}`)
});