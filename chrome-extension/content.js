
// Content.js
// This script is functional code that can be executed in a webpage
console.log("init symon writer and now its 31 diff, reddy");

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

		console.log("vars init complete");

		if (document.getElementById("sys_readonly.incident.number") != null) {
			inc = document.getElementById("sys_readonly.incident.number").value;
		}

		if (document.getElementById("sys_display.incident.assignment_group") != null) {
			team = document.getElementById("sys_display.incident.assignment_group").value;
		}
		
		if (document.getElementById("sys_display.incident.caller_id") != null) {
			callerName = document.getElementById("sys_display.incident.caller_id").value;
		}
		
		if (callerName != null) {
			nameList = callerName.split(" ")
		}
		
		var greetgen = function(n, t, h) {
			t = new Date();
			h = t.getHours();
			g = ""
			n = nameList[1]

			if (h < 12) {
				g = "Good Morning ";
			} else if (h <= 18)  {
				g = "Good Afternoon ";
			} else {
				g = "Good Evening ";
			}
			
			fullgreet = g.concat(n, ',')
			return fullgreet
		};

		console.log("Gen object");

		var msg = {
			greeting: greetgen(),
			snip1: "\n \n Thank you for contacting the Service Desk; we have received your email requesting service. An incident has been opened for you; the ticket number is: ",
			incnumb: inc,
			snip2: ". \nWe've assigned your ticket to the ",
			asin: team,
			snip3: " group for resolution. Have a great day!\n \n", // MODIFY THIS LINE, watch the quotes :)
			closing: "Regards,\n", // MODIFY THIS LINE, watch the quotes :)
			agent: "Yousuf H" // MODIFY THIS LINE, watch the quotes :)
		};

		if( request.message === "clicked_browser_action" ) {

			//Gen'ing letter

			var letter = [];


			letter.push(msg.greeting, msg.snip1, msg.incnumb, msg.snip2, msg.asin, msg.snip3, msg.closing, msg.agent);


			var mesg = letter.join("");

			console.log(mesg);
			
			if (msg.asin == "lions") {
				console.log("erroneous input")
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

			console.log("YO SCOTTY!! IM DONE.");

		}
	}
);
