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
      if (node.innerText && node.innerText.trim() === text) {
        return node;
      }
    }
  }
}

function runScript() {
  try {
    const $forYou = selectTextNodeByText("For you");
    const $following = selectTextNodeByText("Following");

    $forYou.addEventListener("click", () => {
      console.log("clicked for you!");
      localStorage.setItem("lastClickedFollowing", false);
    });

    $following.addEventListener("click", () => {
      console.log("clicked following!");
      localStorage.setItem("lastClickedFollowing", true);
    });

    const lastClickedFollowing = localStorage.getItem("lastClickedFollowing");
    if (lastClickedFollowing === "true") {
      console.log("navigating to following...");
      $following.childNodes[0].click();
    }
  } catch (e) {
    console.log(e);
    setTimeout(runScript, 100);
  }
}

runScript();
