var student = {};
var q1,q2,q3,q4,q5,q6 = -1;

function getStudent(){
	student[0] = document.getElementById("fname");
	student[1] = document.getElementById("lname");
	student[2] = document.getElementById("uoid");
}

function q_one(sel){
	q1 = sel;
}

function q_two(sel){
	q2 = sel
}

function q_three(sel){
	q3 = sel
}

function q_four(sel){
	q4 = sel
}

function q_five(sel){
	q5 = sel
}

function q_six(sel){
	q6 = sel;
	submit()
}

function submit(){
	if(q1==0){
		document.getElementById("answer").innerHTML = "Asia";
	}
	else if (q1 == 1){
		document.getElementById("answer").innerHTML = "Africa";
	}
	else if (q1 == 2){
		document.getElementById("answer").innerHTML = "South America";
	}
	else if (q1 == 5){
		document.getElementById("answer").innerHTML = "Europe";
	}
	else if (q1 == 4){
		document.getElementById("answer").innerHTML = "Oceania";
	}
}