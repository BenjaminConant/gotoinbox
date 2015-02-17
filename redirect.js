function goToGmail() {
	chrome.tabs.create({ url: "http://inbox.google.com" });
}
chrome.browserAction.onClicked.addListener(goToGmail);
