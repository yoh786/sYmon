//Background.js

// Called when user clicks browser action.

chrome.runtime.onInstalled.addListener(function() {
// these run on installation or bootup of the extension

	chrome.storage.sync.set({color: "#3aa757"}, function() {
		console.log("made a storage var");
	});
});

chrome.browserAction.onClicked.addListener(function(tab) {
	// send message to active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	   var activeTab = tabs[0];
	   chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	});
});
