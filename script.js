let girl = "";
let message = "";

function start() {
  girl = document.getElementById("girlName").value;
  message = document.getElementById("message").value;

  if (girl === "" || message === "") {
    alert("Please fill everything 💕");
    return;
  }

  document.getElementById("formCard").classList.add("hidden");
  document.getElementById("slide1").classList.remove("hidden");

  document.getElementById("loveMessage").innerText =
    `Hey ${girl} babe 💖\n\n${message}`;
}

function nextSlide() {
  document.getElementById("slide1").classList.add("hidden");
  document.getElementById("slide2").classList.remove("hidden");

  document.getElementById("question").innerText =
    `So babe… will you be my Valentine? 💘`;
}

function sayYes() {
  document.getElementById("slide2").classList.add("hidden");
  document.getElementById("yesSlide").classList.remove("hidden");
}

function sayNo() {
  document.getElementById("slide2").classList.add("hidden");
  document.getElementById("noSlide").classList.remove("hidden");
}
