
// startGame();

var timeleft;
var letterCount = 0;

var comp = false;

var subjects = Array("ANIMALS", "COUNTRIES", "CELEBRITIES", "SONGS", "FOOD");
var currentSubject = subjects[Math.floor(Math.random()*subjects.length)];

const restartButton = document.getElementById('restartButton');

function buttonPressed() {
  if (comp == true){
    timeleft = 11;
  }
  letterCount++;
}

function addElement() {
  var newContent = [];

  // and give it some content
  for (let i=65; i<91; i++){
    // create a new div element
    const newDiv = document.createElement("div");

    // adding attributes to element
    newDiv.id = "btn1";
    newDiv.setAttribute("onclick", "this.remove();buttonPressed()");

    newContent[i] = document.createTextNode(String.fromCharCode(i));
    // add the text node to the newly created div
    newDiv.appendChild(newContent[i]);
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("hideButton");
    currentDiv.appendChild(newDiv);
  }
}

function Competitive() {
  timeleft = 11;
  comp = true;
  start();
  var countDown = setInterval(function(){
    timeleft--;
    document.getElementById("seconds").textContent = timeleft;
    if(timeleft <= 0 || letterCount == 26) {
        document.body.appendChild(document.createElement('p'));
        document.querySelector("body p:last-child").id = "lose";
        document.querySelector("#lose").innerHTML = "GAME OVER!";

        document.getElementById("countdown").style.display = "none";
        clearInterval(countDown);
    }
}, 1000);
}

function Timed() {
  timeleft = 60;
  start();
  var countDown = setInterval(function(){
    timeleft--;
    document.getElementById("seconds").textContent = timeleft;
    if(timeleft <= 0) {
        document.body.appendChild(document.createElement('p'));
        document.querySelector("body p:last-child").id = "lose";
        document.querySelector("#lose").innerHTML = "GAME OVER!";

        document.getElementById("countdown").style.display = "none";
        clearInterval(countDown);
    }
    if(letterCount == 15) {
      document.body.appendChild(document.createElement('p'));
      document.querySelector("body p:last-child").id = "win";
      document.querySelector("#win").innerHTML = "YOU WIN!";

      document.getElementById("countdown").style.display = "none";
      clearInterval(countDown);
  }
}, 1000);
}

// removes start button once pressed
function start() {
  toggleScreen('start-screen', false);
  toggleScreen('canvas', true);
}
function toggleScreen(id, toggle) {
  let element = document.getElementById(id);
  let display = ( toggle ) ? 'block' : 'none';
  element.style.display = display;
}

function resetGame() {
  window.location.reload();
}