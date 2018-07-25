
// Content.js
// This script is functional code that can be executed in a webpage
console.log("init symon writer and now its 16 diff, reddy");

//example code

$( document ).ready(function() {

// Document load code here if needed; executes on document load. (before media)

});

// ANYTHING OUTSIDE FUNCTION BELOW WILL ALWAYS EXECUTE ON TAB LOAD;

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		//ALL of this is done on browser action click

		var greetgen = function(t, h) {
			t = new Date();
			h = t.getHours();

			if (h <= 12) {
				return "Good Morning";
			} else if (h <= 18)  {
				return "Good Afternoon";
			} else {
				return "Good Evening";
			}
		};

		var team = "lions";
		var inc = "21341";

		console.log("vars init complete");

		inc = document.getElementById("sys_readonly.incident.number").value;
		team = document.getElementById("sys_display.incident.assignment_group").value;

		console.log("Gen object");

		var msg = {
			greeting: greetgen(),
			snip1: ", \n \n We have received your email requesting service. A trouble ticket has been opened for you, the number is: ",
			incnumb: inc,
			snip2: ". Your ticket has been assigned to the ",
			asin: team,
			snip3: " group for resolution. Have a wonderful day!\n \n",
			closing: "Regards,\n",
			agent: "Yousuf H"
		};

		if( request.message === "clicked_browser_action" ) {

			//Gen'ing letter

			var letter = [];


			letter.push(msg.greeting, msg.snip1, msg.incnumb, msg.snip2, msg.asin, msg.snip3, msg.closing, msg.agent);


			var mesg = letter.join("");

			console.log(mesg);


			//creating text area and using it as a holder to copy text to clipboard
			var holdr = document.createElement('textarea');
			holdr.value = mesg;
			holdr.setAttribute('readonly', '');
			holdr.style.position = 'absolute';
			holdr.style.left = '-9999px';

			document.body.appendChild(holdr);
			holdr.select();
			document.execCommand('copy');
			document.body.removeChild(holdr);


			//functional code
			console.log("el fin");

		}
	}
);
