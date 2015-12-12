(function(global) {

  "use strict";

  chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'User-Agent') {
        details.requestHeaders[i].value = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4";
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

})(this);