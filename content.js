// content.js
// Author:
// Author URI: https://
// Author Github URI: https://www.github.com/
// Project Repository URI: https://github.com/
// Description: Handles all the webpage level activities (e.g. manipulating page data, etc.)
// License: MIT

// Listen for clicks on the tabs

function selectTextNodeByText(text) {
  var allElements = document.getElementsByTagName("*");
  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];
    var childNodes = element.childNodes;
    for (var j = 0; j < childNodes.length; j++) {
      var node = childNodes[j];
      if (node.nodeType === 3 && node.textContent === text) {
        return node;
      }
    }
  }
}

const $forYou = selectTextNodeByText("For you");
const $following = selectTextNodeByText("Following");

$forYou.addEventListener("click", () => {
  localStorage.setItem("lastClickedFollowing", false);
});

$following.addEventListener("click", () => {
  localStorage.setItem("lastClickedFollowing", true);
});

const lastClickedFollowing = localStorage.getItem("lastClickedFollowing");

if (lastClickedFollowing === "true") {
  $following.click();
}
