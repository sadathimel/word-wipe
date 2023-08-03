var isMouseDown = false;
var selectedWord = "";
var selectedCells = [];
var floatingTextarea = document.getElementById("floatingTextarea");

var score = document.getElementById("score");
var finalScore = document.getElementById("final-score");
// var thank = document.querySelector("thank");
// var gameover = document.querySelector("gameover");
var scoreCount = 0;
// const words = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'AB',
//   'AC',
//   'BD',
//   'BC',
//   "AT",
//   "WORD",
//   "WIPE",
//   "GAME",
//   "HTML5",
//   "CSS3",
//   "JAVASCRIPT",
//   "ONCLICK",
//   "MATCH",
//   "ARRAY",
//   "HOW",
//   "FIT",
//   "FINE",
//   "DOG",
//   "GO",
//   "WORK",
//   "BOX",
//   "MIX",
//   "IT",
//   "IP",
//   "WE",
//   "ME",
//   "KIDS",
//   "VAT",
//   "PEN",
//   "PAIN"
// ];

function generateGrid() {
  const grid = document.getElementById("grid");

  for (let i = 0; i < 10; i++) {
    let e = document.createElement("div");
    e.classList.add("grid");
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.textContent = randomLetter();
      e.appendChild(cell);
    }
    grid.appendChild(e);
  }
}

function randomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function checkWordMatch() {
  if (words.includes(selectedWord.toLowerCase())) {
    const matchedCells = selectedCells.slice(); // Create a copy of the selectedCells array
    // console.log(matchedCells.values());
    matchedCells.forEach((cell) => cell.classList.add("matched"));
    // console.log(cell);
    // alert(`Match: ${selectedWord.length}`);

    //For selectedWord append textarea===========>
    var p = document.createElement("p");
    var pp = (p.innerText = selectedWord);
    floatingTextarea.value += `${pp} \n`;
    // floatingTextarea.appendChild(pp);

    // For score count================>
    var Count = selectedWord.length * 10;
    scoreCount = scoreCount + Count;
    score.innerHTML = scoreCount;

    // For final score count================>
    finalScore.innerHTML = scoreCount;
    console.log(finalScore);

    // Remove the matched word from the grid
    setTimeout(() => {
      matchedCells.forEach((cell) => cell.remove());
    }, 1000);
  }
  // console.log(selectedWord);

  selectedWord = "";
  selectedCells = [];
}

function handleCellMouseDown(event) {
  isMouseDown = true;
  selectCell(event);
}

function handleCellMouseOver(event) {
  if (isMouseDown) {
    selectCell(event);
  }
}

function handleCellMouseUp() {
  isMouseDown = false;
  checkWordMatch();
  clearSelection();
}

function selectCell(event) {
  const target = event.target;
  if (!target.classList.contains("cell")) return;
  if (!target.classList.contains("selected")) {
    target.classList.add("selected");
    const letter = target.textContent;
    // console.log(letter);
    selectedWord += letter;
    selectedCells.push(target);
    // console.log(target)
  }
}

//   function selectCell(event) {
//     const target = event.target;
//     target.classList.add("selected");
//     selectedWord += target.textContent;
//     selectedCells.push(target);
//   }

function clearSelection() {
  selectedCells = document.querySelectorAll(".selected");
  selectedCells.forEach((cell) => cell.classList.remove("selected"));
  selectedWord = "";
  // console.log(selectedWord)
  selectedCells = new Array();
}

const grid = document.getElementById("grid");
generateGrid();

grid.addEventListener("mousedown", handleCellMouseDown);
grid.addEventListener("mouseover", handleCellMouseOver);
document.addEventListener("mouseup", handleCellMouseUp);

function countdown() {
  let seconds = 200;
  const timerDisplay = document.getElementById("timer");

  const interval = setInterval(() => {
    seconds--;
    timerDisplay.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(interval);
      document.querySelector(".pp_wrapper").style.display = "none";
      document.querySelector(".gameover").style.display = "block";
      // Add any additional actions you want to perform when the timer reaches 0.
    }
  }, 1000);
}

countdown();

// restart button function
let restartButton = document.getElementById("restart");
restartButton.addEventListener("click", restart);
function restart() {
  location.reload();
}

document.querySelector(".submit").addEventListener("click", function (e) {
  if (checkName() && checkMobileNumber()) {
    // console.log("success");
    // document.querySelector(thank).classList.remove("hidden");
    // gameover.classList.add("hidden");
    // thankYou();
    document.querySelector(".gameover").style.display = "none";
    document.querySelector(".pp_wrapper").style.display = "none";
    document.querySelector(".thank").style.display = "block";
    e.preventDefault();
    // preventdefault();
  } else {
    console.log("error");
  }
});

function checkName() {
  var name = getValue("name");
  if (name != "") {
    document.getElementById("name").classList.add("success");
    document.getElementById("name").classList.remove("error");
    return true;
  }
  document.getElementById("name").classList.add("error");
  document.getElementById("name").classList.remove("success");
  return false;
}

// check mobile number validation

function checkMobileNumber() {
  var mobileNum = getValue("mobile_no");
  var mobilePattern = /^(?:\+88|88)?(01[3-9]\d{8})$/;

  if (mobileNum != "" && mobileNum.match(mobilePattern)) {
    document.getElementById("mobile_no").classList.remove("error");
    document.getElementById("mobile_no").classList.add("success");

    return true;
  } else {
    document.getElementById("mobile_no").classList.add("error");
    document.getElementById("mobile_no").classList.remove("success");

    return false;
  }
}

function getValue(elementId) {
  return document.getElementById(elementId).value;
}

// function thankYou() {
//   // thank.style.display = "block";
//   // gameover.style.display = "none";

//   console.log("thank you");
// }

// contest entry from
var contest = document.querySelector(".contest");
contest.addEventListener("click", contestEntry);
function contestEntry() {
  console.log("contest");
  var ppslide3 = document.querySelector(".from");
  ppslide3.classList.remove("hidden");
}

//====================================================>

var submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
  var name = document.querySelector("#name").value;
  var mobile = document.querySelector("#mobile_no").value;
  // console.log(name,mobile )
  if (mobile.length > 10 && name.length) {
    data_handle(name, mobile);
    // thankYou();
  } else {
    console.log("Data not valid");
  }
});

var submitted = false;
function data_handle(name, mobile) {
  let data = new FormData();
  console.log(data);
  var valid_number = "";
  console.log(`${scoreCount} this is from outsite`);
  if ((valid_number = checkMobileNumber(mobile) && !submitted)) {
    console.log(`${scoreCount} this is from insite`);
    data.append("name", name);
    data.append("mobile", mobile);
    // data.append("score", window.top.location.href);
    data.append("wpscore", scoreCount);
    console.log(scoreCount);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        submitted = true;
        if (xhttp.responseText == "200") {
          ppslide3.classList.add("hidden");
          console.log(xhttp.responseText);
        } else {
          console.log(xhttp.responseText);
          submitted = false;
        }
      }
    };
    xhttp.open("POST", "http://localhost/wordwipe/wordwipedb/data.php", true);
    xhttp.send(data);
    console.log(data);

    return true;
  } else {
    return false;
  }
}
