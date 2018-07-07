
// Content.js
// This script is functional code that can be executed in a webpage
console.log("init symon writer");

//example code

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "clicked_browser_action" ) {
			//this is done on browser action click
			var firstHref = $("a[href^='http']").eq(0).attr("href");
			console.log(firstHref);

		}
	}
);


//functional code
console.log("el fin");
