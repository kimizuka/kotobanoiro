(function(win, doc) {

  "use strict";

  var NO_IMG_KLASS = "noimg";

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.state) {
      _hide();
    } else {
      _show();
    }

    return true;
  });

  function _hide() {
    doc.getElementById("main").classList.add(NO_IMG_KLASS);
  }

  function _show() {
    doc.getElementById("main").classList.remove(NO_IMG_KLASS);
  }

})(this, document);