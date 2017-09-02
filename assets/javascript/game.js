//window.setupGame();

$(document).ready(function() {

var generatedNumber = Math.floor((Math.random() * 101) + 19);
	console.log(generatedNumber)

var crystalNumber1 = Math.floor((Math.random() * 11) + 1);
	console.log(crystalNumber1)

var crystalNumber2 = Math.floor((Math.random() * 11) + 1);
	console.log(crystalNumber2)

var crystalNumber3 = Math.floor((Math.random() * 11) + 1);
	console.log(crystalNumber3)

var crystalNumber4 = Math.floor((Math.random() * 11) + 1);
	console.log(crystalNumber4)

var currentTotal = 0;
var result = 0;
var win = 0;
var loss = 0;
setupGame();
// var crystalNumber1 = "";
// var crystalNumber2 = "";
// var crystalNumber3 = "";
// var crystalNumber4 = "";
var operator = "+";

$("#crystal1").on("click", function() {
	currentTotal += crystalNumber1;
	//console.log("currentTotal is : " + currentTotal);
	$("#guess-count").text(currentTotal);
	if (currentTotal === generatedNumber){
		win = win + 1;
		setupGame();
	}

	else if (currentTotal > generatedNumber){
		loss = loss + 1;
		setupGame();
	}


});
$("#crystal2").on("click", function() {
	currentTotal += crystalNumber2;
	//console.log("currentTotal is : " + currentTotal);
	$("#guess-count").text(currentTotal);
	if (currentTotal === generatedNumber){
		win = win + 1;
		setupGame();
	}

	else if (currentTotal > generatedNumber){
		loss = loss + 1;
		setupGame();
	}


});
$("#crystal3").on("click", function() {
	currentTotal += crystalNumber3;
	//console.log("currentTotal is : " + currentTotal);
	$("#guess-count").text(currentTotal);
	if (currentTotal === generatedNumber){
		win = win + 1;
		setupGame();
	}

	else if (currentTotal > generatedNumber){
		loss = loss + 1;
		setupGame();
	}


});
$("#crystal4").on("click", function() {
	currentTotal += crystalNumber4;
	//console.log("currentTotal is : " + currentTotal);
	$("#guess-count").text(currentTotal);
	if (currentTotal === generatedNumber){
		win = win + 1;
		setupGame();
	}

	else if (currentTotal > generatedNumber){
		loss = loss + 1;
		setupGame();
	}


});


//add crystal numbers to the current total
//currentTotal = crystalNumber1 + crystalNumber2;
//console.log("currentTotal is : " + currentTotal);

/*$("#result").html(result);
$("#guess-count").text(currentTotal);
$("#generated-number").html(generatedNumber);*/

function setupGame() {
	generatedNumber = Math.floor((Math.random() * 101) + 19);
	crystalNumber1 = Math.floor((Math.random() * 11) + 1);
	crystalNumber2 = Math.floor((Math.random() * 11) + 1);
	crystalNumber3 = Math.floor((Math.random() * 11) + 1);
	crystalNumber4 = Math.floor((Math.random() * 11) + 1);
	currentTotal = 0;
	$("#result").html(result);
	$("#guess-count").text(currentTotal);
	$("#generated-number").html(generatedNumber);
	$("#win").text("wins:" + win);
	$("#losses").text("losses:" + loss);
}


/*if (currentTotal === generatedNumber){
	win = win + 1;
	setupGame();
}

else if (currentTotal > generatedNumber){
	loss = loss + 1;
	setupGame();
}*/






	/*$(document).on("click"), "button", function(){
		if ($(this)).hasClass("crystal1")

	}*/


//if current total is not equal to generated-number, then you lose

//if current total is equal to generated number, then you win
});


