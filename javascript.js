var a = new Array(form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value);
var rightAnswers = new Array("c","b","a","a","a","c","a","a","a","c");
var score = 0;
 
function getScore(form) {
    if(a[0] == "" || a[1] == "" || a[2] == "" || a[2] == "" || a[3] == "" || a[4] == "" || a[5] == "" || a[6] ==  || a[7] == "" || a[8] == "" || a[9] == ""){
        alert("You haven't answered all of the questions yet.");
    } else {
        for(var i = 0; i<10 ; i++){
            if(a[i] == rightAnswers[i]) score++;
        }
        var percent = score*10;
        alert("You scored "+score". That's "+percent+"%.");
    }
}