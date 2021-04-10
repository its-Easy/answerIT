var marks =0,t=0;

class question {
    constructor(qname, opt1, opt2, opt3, opt4, ans, timeLimit) {
        this.qname = qname;
        this.opt1 = opt1;
        this.opt2 = opt2;
        this.opt3 = opt3;
        this.opt4 = opt4;
        this.ans = ans;
        this.timeLimit = timeLimit;
    }
}

let q1 = new question("Which feature you liked best in our project ?", "Time Limit", "Question Shuffle", "No returning back", "All of the above", "All of the above", 5);
let q2 = new question("How likely is our project capable of preventing cheating ?", "0/10", "3/10", "8/10", "10/10", "10/10", 5);
let q3 = new question("Do you still think students can cheat ?", "Yes", "They would face some difficulty", "No", "Cannot say", "No", 5);
let q4 = new question("How much points would you like to give our project out of 10 ?", "1", "5", "8", "10", "10", 5);

var q = [];
q.push(q1);
q.push(q2);
q.push(q3);
q.push(q4);

var j=-1;
function nextQuestion() {
    j++;
document.getElementById("qname").innerHTML = q[j].qname;
 
document.getElementById("opt1").innerHTML = q[j].opt1;
document.getElementById("opt2").innerHTML = q[j].opt2;
document.getElementById("opt3").innerHTML = q[j].opt3;
document.getElementById("opt4").innerHTML = q[j].opt4;

showTimeLeft();
setTimeout(nextQuestion, q[j].timeLimit*1000);

if(j>2)
submitResponses();

}


document.getElementById("next-btn").addEventListener('click', checkAnswer);

var ans;

function checkAnswer() {
    console.log("checkin ans");
    ans=document.forms[0];
    for(var t=0;t<ans.length;t++) {
        if(ans[t].checked) {
            ans=document.getElementById("opt"+(t+1)).textContent;
            break;
        }                    
    }

    if(ans==q[j].ans)
    marks+=10;

    nextQuestion();
}

nextQuestion();

function submitResponses() {
    document.write(marks);
}
// showTimeLeft();
function showTimeLeft() {
    if(t==q[j].timeLimit)
    t=0;

    document.getElementById("timeLeft").innerHTML= q[j].timeLimit - t++;
    setTimeout( showTimeLeft, 1000);
}

module.exports.marks = marks;