//word array

const words = [
  "Awesome",
  "Superb",
  "Understand",
  "Greetings",
  "Psychopath",
  "Quinoa",
  "Scissors",
  "Temperature",
  "Isthmus",
  "Phenomenon",
];
const startBtn = document
  .getElementById("start")
  .addEventListener("click", function () {
    const header = document.getElementById("header");
    header.style.display = "none";
    //random word generator
    let random = words[Math.floor(Math.random() * words.length)];
    //h1 inner Text
    const firstWord = document.getElementById("first");
    firstWord.innerText = random;
    //time out of random word
    setTimeout(() => {
      firstWord.style.visibility = "hidden";
    }, 700);

    // timeout of input field
    const input = document.getElementById("inputOne");
    setTimeout(() => {
      input.style.visibility = "visible";
    }, 800);
    //submit btn
    const submit = document.getElementById("submit");
    setTimeout(() => {
        submit.style.visibility = "visible";
    }, 800);
    submit.addEventListener("click", function () {
      if (random == input.value) {
        textMsg.innerText = "You won";
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      } else {
        textMsg.innerText = "Dumb mind!";
        const third = document.getElementById("third");
        third.style.visibility = 'visible';
        third.innerText = "The word was " + random;
      }
    });
    //type the word message
    const textMsg = document.getElementById("second");
    setTimeout(() => {
      textMsg.style.visibility = "visible";
    }, 800);

    input.addEventListener("keyup", function () {
      if (random === input.value) {
      }
    });
  });
