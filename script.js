const girlName = "Nokutenda"; // Hardcoded name

const messages = [
  `Hey ${girlName}, will you be my Valentine?`,
  "Are you sure?",
  `Thank you, babe. I knew you would say yes. This is my first gift to you, asking you to be my Valentine. I know you're already my girlfriend, but it would be very special if you become my Valentine.`,
  "Yeah, I knew you would agree. Thank you so much, babe ❤️",
  "THE END 💖"
];

let stepIndex = 0;

function showMessage() {
  document.getElementById("messageText").innerText = messages[stepIndex];
  if(stepIndex === messages.length - 1){
    document.getElementById("buttons").style.display = "none";
  } else {
    document.getElementById("buttons").style.display = "block";
  }
}

function nextStep(answer) {
  if(answer === 'no'){
    document.getElementById("messageText").innerText = "It's okay 🌸 Maybe next time!";
    document.getElementById("buttons").style.display = "none";
    return;
  }
  stepIndex++;
  showMessage();
}

showMessage();
