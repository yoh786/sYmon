
// Content.js
// This script is functional code that can be executed in a webpage
console.log("init symon writer 1.0c, reddy");

//example code

$( document ).ready(function() {

// Document load code here if needed; executes on document load. (before media)

});

// ANYTHING OUTSIDE FUNCTION BELOW WILL ALWAYS EXECUTE ON TAB LOAD;




chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		//ALL of this is done on browser action click


		var team = "lions";
		var inc = "21341";
		var callerName = "hold";

		console.log("vars init complete");

		if (document.getElementById("sys_readonly.incident.number") != null) {
			inc = document.getElementById("sys_readonly.incident.number").value;
		}

		if (document.getElementById("sys_display.incident.assignment_group") != null) {
			team = document.getElementById("sys_display.incident.assignment_group").value;
		}

		if (document.getElementById("sys_display.incident.caller_id") != "") {
			callerName = document.getElementById("sys_display.incident.caller_id").value;
		}

		if (callerName != "") {
			nameList = callerName.split(", ")
		}

		var greetgen = function(n, t, h) {
			t = new Date();
			h = t.getHours();
			g = ""

			if (nameList != undefined) {
				n = nameList[1]
			}
			console.log(n)
			fn = ""

			if (n != undefined) {
				nar = n.split(" ")
				fn = nar[0] + ""
				console.log(fn)
			}

			if (h < 12) {
				g = "Good Morning ";
			} else if (h <= 18)  {
				g = "Good Afternoon ";
			} else {
				g = "Good Evening ";
			}

			fullgreet = g.concat(fn, ',')

			return fullgreet
		};

		console.log("Gen object");


		var msg = {
			greeting: greetgen(),
			snip1: "\n \n We have received your email requesting service.   A trouble ticket has been opened for you, the number is ",
			incnumb: inc,
			snip2: ".   Your ticket has been assigned to the ",
			asin: team,
			snip3: " group for resolution.\n \nThank you and please contact the Help Desk if you have any questions regarding this ticket.", // MODIFY THIS LINE, watch the quotes :)
			closing: "\n \n \n Regards,\n", // MODIFY THIS LINE, watch the quotes :)
			agent: "  - " // MODIFY THIS LINE, watch the quotes :)
		};

		if( request.message === "clicked_browser_action" ) {

			//Gen'ing letter

			var letter = [];


			letter.push(msg.greeting, msg.snip1, msg.incnumb, msg.snip2, msg.asin, msg.snip3, msg.closing, msg.agent);


			var mesg = letter.join("");


			if (msg.asin == "") {
				console.log("erroneous input")
				mesg = "Missing field - Assigned Group"
			}; //incomplete error catch for unfilled team


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

		// THERE IS A BOUNTY ON THIS CODE BLOCK - GET MESSAGE SENDING TO WORK AND WIN!
			//console.log("imma send a message");
			// this line is new and sends a message to background.js
		//	chrome.runtime.sendMessage({
		//		"message": "email_completed_success"
		//	});
		//chrome.runtime.sendMessage({
		//	"message": "code_worked"
		//});


		}
	}
);
