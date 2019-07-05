//Background.js


// Called when user clicks browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	// send message to active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	   var activeTab = tabs[0];
	   chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
		 chrome.browserAction.setBadgeBackgroundColor({color: '#DB3236'});
		 chrome.browserAction.setBadgeText({text: '<3', tabId: activeTab.id});
		 
		 console.log("finish interpreting background.js")
	 })
});

//this block new;; accepts message from content.js; will return to this functionality later
//chrome.runtime.onMessage.addListener(
//	function(request, sender, sendResponse) {
//		if ( request.message === "code_worked" ) {
//			chrome.browserAction.setBadgeText({ text: 'GOOD' });
//		}
//	}
//);
