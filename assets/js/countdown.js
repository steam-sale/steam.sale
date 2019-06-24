// countdown.js - Countdown to Next Steam Sale (Forgive me, I don't know js)
// https://www.w3schools.com/howto/howto_js_countdown.asp

// Start time of next sale; time counting down to
var nextSaleDate = new Date(Date.UTC(2019, 5, 25, 17, 0, 0)).getTime(); // Start time in UTC (EDT + 4 hours)

// Update the count down every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = nextSaleDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Fix plurality (is that a word?) of day/days
	var dayP = " Days"
	if (days === 1) {
		dayP = " Day"
	}

	// Display the result in the element with id="demo"
	// document.getElementById("demo").innerHTML = days + "d " + hours + "h "
	// + minutes + "m " + seconds + "s ";
	document.getElementById("countdown-clock").innerHTML = "<h2>" + days + dayP + "</h2>";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "Now";
	}
}, 1000);