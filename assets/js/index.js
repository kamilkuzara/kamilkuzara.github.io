let windowCloseButton = document.getElementById("button-1");
windowCloseButton.addEventListener("click", minimiseWindow);

let windowOpenButton = document.getElementById("button-3");
windowOpenButton.addEventListener("click", maximiseWindow);

let windowOpen = true;

// TODO: Replace setting display to none with adding the class hidden.

function minimiseWindow(){

  // only close the window if it is open,
  // prevents the intro replacement from being minimised twice
  if(!windowOpen)
    return;

  let introWrapper = document.getElementById("intro-wrapper");
  let leftColumn = document.getElementById("left-column");
  let rightColumn = document.getElementById("right-column");
  let introReplacement = document.getElementById("intro-replacement");

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

  let introWrapper = document.getElementById("intro-wrapper");
  let leftColumn = document.getElementById("left-column");
  let rightColumn = document.getElementById("right-column");
  let introReplacement = document.getElementById("intro-replacement");

  // open the window
  introWrapper.style.gridTemplateRows = "3em 27em";
  rightColumn.style.display = "flex";
  leftColumn.style.display = "flex";

  // hide the info replacement
  introReplacement.style.display = "none";

  windowOpen = true;
}

// -----------------------------------------------------------------------------

let cursorOn = true;

function toggleCursor(){
  let welcomeText = document.getElementById("welcome-text");
  let currentText = welcomeText.innerHTML;

  if(cursorOn){
    currentText = currentText.substring(0, currentText.length - 1);
    cursorOn = false;
  } else {
    currentText += "|";
    cursorOn = true;
  }

  welcomeText.innerHTML = currentText;
}

function printLetter(letter){
  let welcomeText = document.getElementById("welcome-text");
  let currentText = welcomeText.innerHTML;

  currentText = currentText.substring(0, currentText.length - 1) + letter;
  welcomeText.innerHTML = currentText + "|";
}

function animateWelcomeText(inputAnimation){
  if(inputAnimation)
    clearInterval(inputAnimation);

  let text = "Welcome to my Internet home!";
  let delay = 150;
  let timeout = Math.random() * delay;

  for(letter of text){
    setTimeout(printLetter, timeout, letter);
    timeout += Math.random() * delay;
  }

  setTimeout(() => {
    setInterval(toggleCursor, 600);
  }, timeout);
}

let initialAnimation = setInterval(toggleCursor, 600);

setTimeout(animateWelcomeText, 2400, initialAnimation);
