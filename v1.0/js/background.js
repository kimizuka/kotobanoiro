(function(global) {

  "use strict";

  var state = false;

  chrome.runtime.onInstalled.addListener(init);
  chrome.runtime.onStartup.addListener(init);

  chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'User-Agent') {
        console.log(details.requestHeaders[i].value);
        break;
      }
    }
    
    return {
      requestHeaders: details.requestHeaders
    };

  },{
    urls: ["<all_urls>"]
  },
  [
    "blocking",
    "requestHeaders"
  ]);


  chrome.browserAction.onClicked.addListener(function() {
    state = !state;

    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, function(tabs) {
      chrome.tabs.get(tabs[0].id, function(tab) {
        chrome.tabs.sendMessage(tabs[0].id, {state: state});
      });
    });

    chrome.browserAction.setBadgeText({
      text: state ? "ON" : ""
    });
  });

  function init() {
    state = false;
    chrome.storage.local.set({state : state});
  }

})(this);