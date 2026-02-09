const name = "Shizane";

const messages = [
  `Hey ${name}, will you be my Valentine? 💖`,
  "Are you sure? 😌",
  `If I could give you one thing in life, I'd give you the ability to see yourself through my eyes.
Only then you would realize how special you are to me.

I choose you and I will choose you over and over again,
without pause, without doubt, in a heartbeat.
I'll keep choosing you. 💕`,
  `You are not just my Valentine,
you are my always and forever. ❤️`
];

let step = 0;

const messageEl = document.getElementById("message");
messageEl.innerText = messages[step];

// HEARTS
for (let i = 0; i < 50; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";

  const color = Math.random() > 0.5 ? "#ff4d6d" : "#ffc0cb";
  heart.style.background = color;
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";

  heart.style.setProperty("--heart-color", color);
  heart.style.background = color;
  heart.style.opacity = Math.random();

  document.body.appendChild(heart);
}

// SPARKLES
for (let i = 0; i < 40; i++) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.background =
    Math.random() > 0.5 ? "#8fd3ff" : "#ffd6e8";
  sparkle.style.animationDelay = Math.random() * 4 + "s";
  document.body.appendChild(sparkle);
}

function answer(choice) {
  if (choice === "no") {
    messageEl.innerText = "It's okay 🌸 You are still special.";
    document.getElementById("buttons").style.display = "none";
    return;
  }

  step++;
  if (step < messages.length) {
    messageEl.innerText = messages[step];
  } else {
    document.getElementById("buttons").style.display = "none";
  }
}
