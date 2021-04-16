let windowCloseButton = document.getElementById("button-1");
windowCloseButton.addEventListener("click", minimiseWindow);

let windowOpenButton = document.getElementById("button-3");
windowOpenButton.addEventListener("click", maximiseWindow);

let introWrapper = document.getElementById("intro-wrapper");
let leftColumn = document.getElementById("left-column");
let rightColumn = document.getElementById("right-column");

let introReplacement = document.getElementById("intro-replacement");

let windowOpen = true;


// TODO: Replace setting display to none with adding the class hidden.

function minimiseWindow(){

  // only close the window if it is open,
  // prevents the intro replacement from being minimised twice
  if(!windowOpen)
    return;

  let height = String(leftColumn.clientHeight) + "px";

  // close the window
  rightColumn.style.display = "none";
  leftColumn.style.display = "none";
  introWrapper.style.gridTemplateRows = "3em 0";

  // show info replacement,
  // the same height as the height of the initial window
  // has to be set
  introReplacement.style.height = height;
  introReplacement.style.display = "block";

  windowOpen = false;
}


function maximiseWindow(){

  // open the window
  introWrapper.style.gridTemplateRows = "3em 27em";
  rightColumn.style.display = "flex";
  leftColumn.style.display = "flex";

  // hide the info replacement
  introReplacement.style.display = "none";

  windowOpen = true;
}
