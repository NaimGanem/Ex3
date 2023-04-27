let container = document.getElementById("Game");
let originalBlackBox = document.getElementById("BlackBox");
let blueBox = document.querySelector(".BlueBox");
let grayBox3 = document.querySelector(".GrayBox3");
let Layout3Yellowbox = document.querySelector(".Layout3Yellowbox");
let footer = document.querySelector("footer");
let Ssize = 80;
let left = 436;
let boxCount = 0;
function RandomAbc() {
  const Array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet = Math.floor(Math.random() * Array.length);
  return Array[alphabet];
}
let clickedElements = [];
let clickCount = 0;
let Stop = 246;
originalBlackBox.onclick = () => {
  if (boxCount < 12) {
    for (let i = 0; i < 3; i++) {
      let newBlackBox = document.createElement("div");
      newBlackBox.style.position = "absolute";
      newBlackBox.style.height = Ssize + "px";
      newBlackBox.style.width = Ssize + "px";
      newBlackBox.style.backgroundColor = "black";
      newBlackBox.style.left = left + "px";
      newBlackBox.style.top = Stop + "px";
      let letter = RandomAbc();
      let letterDiv = document.createElement("div");
      letterDiv.style.fontSize = "64px"
      letterDiv.style.height = "86px";
      letterDiv.style.width = "43p";
      letterDiv.style.fontFamily = 'Amiko'
      letterDiv.style.color = "black";
      letterDiv.style.display = "flex";
      letterDiv.style.justifyContent = "center";
      letterDiv.style.alignItems = "center";
      letterDiv.style.position = "absolute";
      letterDiv.style.top = "50%";
      letterDiv.style.left = "50%";
      letterDiv.style.transform = "translate(-50%, -50%)";
      letterDiv.innerText = letter;
      newBlackBox.appendChild(letterDiv);
      newBlackBox.addEventListener("click", () => 
      {
        if (clickCount < 2) {
          letterDiv.style.color = "white";
          clickedElements.push({ letter: letter, element: newBlackBox });
          clickCount++;
          if (clickCount == 2) {
            if (clickedElements[0].letter == clickedElements[1].letter && clickedElements[0].element != clickedElements[1].element) {
              clickedElements[0].element.style.backgroundColor = "green";
              clickedElements[1].element.style.backgroundColor = "green";
              const element1 = clickedElements[0].element;
              const element2 = clickedElements[1].element;
              setTimeout(() => {
                element1.style.backgroundColor = "white";
                element1.style.display='none';
                element1.querySelector("div").style.color = "white";
                element2.style.backgroundColor = "white";
                element2.style.display="none";
                element2.querySelector("div").style.color = "white";
              }, 1000);
              clickedElements = [];
              clickCount = 0;
            }
            else {
              const element1 = clickedElements[0].element;
              const element2 = clickedElements[1].element;
              element1.style.backgroundColor = "red";
              element1.querySelector("div").style.color = "black";
              element2.style.backgroundColor = "red";
              element2.querySelector("div").style.color = "black";
              setTimeout(() => {
                element1.style.backgroundColor = "black";
                element1.querySelector("div").style.color = "black";
                element2.style.backgroundColor = "black";
                element2.querySelector("div").style.color = "black";
              }, 1000);
              clickedElements = [];
              clickCount = 0;
            }
          }
        }
      });
      container.appendChild(newBlackBox);
      left += Ssize + 20 + 50;
      Ssize += 20;
      if (left + 150 > blueBox.offsetLeft) {
        left = 436;
        Stop += newBlackBox.offsetHeight + 50;
      }
    }
    boxCount = boxCount + 3;
  };
}
///////////////////////////////mobile
if (window.matchMedia('(max-width: 1000px)').matches) {
  let sBoxCount = 0;
  let container = document.getElementById("container");
  let originalBlackBox = document.getElementById("BlackBox");
  let Layout3Yellowbox = document.querySelector(".Layout3Yellowbox");
  let Ssize = 80;
  let left = 48;
  function RandomAbc() {
    const Array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphabet = Math.floor(Math.random() * Array.length);
    return Array[alphabet];
  }
  let clickedElements = [];
  let clickCount = 0;
  let Stop = 308;
  originalBlackBox.onclick = () => 
  {
    if (sBoxCount < 12) {
      for (let i = 0; i < 3; i++) {
        let newBlackBox = document.createElement("div");
        newBlackBox.style.position = "absolute";
        newBlackBox.style.height = Ssize + "px";
        newBlackBox.style.width = Ssize + "px";
        newBlackBox.style.backgroundColor = "black";
        newBlackBox.style.left = left + "px";
        newBlackBox.style.top = Stop + "px";
        let letter = RandomAbc();
        let letterDiv = document.createElement("div");
        letterDiv.style.fontSize = "64px"
        letterDiv.style.height = "86px";
        letterDiv.style.width = "43p";
        letterDiv.style.fontFamily = 'Amiko'
        letterDiv.style.color = "black";
        letterDiv.style.display = "flex";
        letterDiv.style.justifyContent = "center";
        letterDiv.style.alignItems = "center";
        letterDiv.style.position = "absolute";
        letterDiv.style.top = "50%";
        letterDiv.style.left = "50%";
        letterDiv.style.transform = "translate(-50%, -50%)";
        letterDiv.innerText = letter;
        newBlackBox.appendChild(letterDiv);
        newBlackBox.addEventListener("click", () => 
      {
        if (clickCount < 2) {
          letterDiv.style.color = "white";
          clickedElements.push({ letter: letter, element: newBlackBox });
          clickCount++;
          if (clickCount == 2) {
            if (clickedElements[0].letter == clickedElements[1].letter && clickedElements[0].element != clickedElements[1].element) {
              clickedElements[0].element.style.backgroundColor = "green";
              clickedElements[1].element.style.backgroundColor = "green";
              const element1 = clickedElements[0].element;
              const element2 = clickedElements[1].element;
              setTimeout(() => {
                element1.style.backgroundColor = "white";
                element1.style.display='none';
                element1.querySelector("div").style.color = "white";
                element2.style.backgroundColor = "white";
                element2.style.display="none";
                element2.querySelector("div").style.color = "white";
              }, 1000);
              clickedElements = [];
              clickCount = 0;
            }
            else {
              const element1 = clickedElements[0].element;
              const element2 = clickedElements[1].element;
              element1.style.backgroundColor = "red";
              element1.querySelector("div").style.color = "black";
              element2.style.backgroundColor = "red";
              element2.querySelector("div").style.color = "black";
              setTimeout(() => {
                element1.style.backgroundColor = "black";
                element1.querySelector("div").style.color = "black";
                element2.style.backgroundColor = "black";
                element2.querySelector("div").style.color = "black";
              }, 1000);
              clickedElements = [];
              clickCount = 0;
            }
          }
        }
      });
        container.appendChild(newBlackBox);
        if (newBlackBox.offsetTop + parseInt(newBlackBox.style.height) + 386 > Layout3Yellowbox.offsetTop) {
          sBoxCount = sBoxCount + 10;
          Layout3Yellowbox.style.marginTop = 300 + "px";
        }
        left += Ssize + 20 + 50;
        Ssize += 20;
        var screenWidth = window.innerWidth;
        if (left + 1300 > screenWidth) {
          left = 48;
          Stop += newBlackBox.offsetHeight + 50;
        }
      }
    };
  }
}