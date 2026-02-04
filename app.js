let c = 0;
let n = 0;

function finalmsg() {
    document.body.classList.remove("bg2");
    document.body.classList.add("bg3");
    document.getElementById("title3").textContent = "Знаех си, че няма да ми откажеш :)";
    toggleButton();
    setTimeout(() => document.getElementById("img").classList.toggle("hidden"), 1000);
}

function toggleButton() {
  document.getElementById("div2").classList.toggle("hidden");
}

function toggleSize() {
  c++;

  document.getElementById("1").classList.toggle("big" + c);
  document.getElementById("2").classList.toggle("small" + c);
  if(c==14){document.getElementById("2").classList.toggle("hidden");}
}

function next(){
  n++;

  if(n==1){document.getElementById("title1").classList.toggle("hidden");
    document.getElementById("title2").classList.toggle("hidden");
  }

  else if(n==2){document.getElementById("title2").classList.toggle("hidden");
    document.getElementById("title3").classList.toggle("hidden");
    document.getElementById("3").classList.toggle("hidden");
    document.getElementById("div2").classList.toggle("hidden");
    document.body.classList.remove("bg1");
    document.body.classList.add("bg2");
  }
}

function heart() {
  const container = document.getElementById("effects");

  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  container.appendChild(heart);

  const sparkCount = 32;
  const angleStep = (Math.PI * 2) / sparkCount;

  for (let i = 0; i < sparkCount; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";

    // ✅ START POSITION (CENTER)
    spark.style.left = x + "px";
    spark.style.top = y + "px";

    // spaced angle + jitter
    const angle =
      i * angleStep +
      (Math.random() - 0.5) * angleStep * 1.5;

    const distance = Math.random() * 140 + 500;

    spark.style.setProperty(
      "--x",
      Math.cos(angle) * distance + "px"
    );
    spark.style.setProperty(
      "--y",
      Math.sin(angle) * distance + "px"
    );

    container.appendChild(spark);
    setTimeout(() => spark.remove(), 2000);
  }



  setTimeout(() => heart.remove(), 2000);
}



