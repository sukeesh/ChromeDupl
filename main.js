chrome.browserAction.onClicked.addListener(function(tab) {
    var x =(tab.url);
    chrome.tabs.create({url:x});
});

var x = 4;
var y = 5;
var ss = document.getElementById("hi')

