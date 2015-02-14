function goToGmail() {
	chrome.tabs.create({ url: "http://mail.google.com" });
}
chrome.browserAction.onClicked.addListener(goToGmail);
