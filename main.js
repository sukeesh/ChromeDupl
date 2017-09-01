chrome.browserAction.onClicked.addListener(function(tab) {
    var x =(tab.url);
    chrome.tabs.create({url:x});
});
