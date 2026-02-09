const name = "Shizane";

const messages = [
  `Hey ${name}, will you be my Valentine? 💖`,
  "Are you sure? 😌",
  `If I could give you one thing in life, I'd give you the ability to see yourself through my eyes.
Only then you would realize how special you are to me.

I choose you, and I will choose you over and over again,
without pause, without doubt, in a heartbeat.
I'll keep choosing you. 💕`,
  `You are not just my Valentine,
you are my always and forever. ❤️`
];

let step = 0;

document.getElementById("message").innerText = messages[step];

// Create floating hearts
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDelay = Math.random() * 5 + "s";
  heart.style.background = Math.random() > 0.5 ? "#ff4d6d" : "#ffd6e8";
  document.body.appendChild(heart);
}

function answer(choice) {
  if (choice === "no") {
    document.getElementById("message").innerText =
      "It's okay 🌸 You are still special.";
    document.getElementById("buttons").style.display = "none";
    return;
  }

  step++;
  if (step < messages.length) {
    document.getElementById("message").innerText = messages[step];
  } else {
    document.getElementById("buttons").style.display = "none";
  }
}
