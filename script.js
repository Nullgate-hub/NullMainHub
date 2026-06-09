/* ===== HERO TYPING ===== */
const heroTitle = "Roblox Anti-Cheat, Done Right.";
const heroSub   = "Affordable, effective anti-cheat for your Roblox game. Over a year of Luau experience protecting growing communities.";

const titleEl = document.getElementById("hero-title");
const cursorEl = titleEl.querySelector(".cursor");
let ti = 0;

function typeTitle() {
  if (ti < heroTitle.length) {
    titleEl.insertBefore(document.createTextNode(heroTitle[ti++]), cursorEl);
    setTimeout(typeTitle, 55);
  } else {
    setTimeout(() => {
      const subEl = document.getElementById("hero-sub");
      subEl.style.transition = "opacity 0.8s ease";
      subEl.style.opacity = "1";
      subEl.textContent = heroSub;
      setTimeout(() => {
        const btn = document.getElementById("hero-btn");
        btn.style.transition = "opacity 0.6s ease";
        btn.style.opacity = "1";
      }, 600);
    }, 200);
  }
}

setTimeout(typeTitle, 300);

/* ===== TERMINAL TYPING ===== */
const termLines = [
  "Hello! Looking for an anti cheat for your game?",
  "And for a low price? You've found the right person!",
  "",
  "I do low rates because I genuinely want people to have",
  "a better time — no more worrying about cheaters.",
  "",
  "These anti-cheats won't stop ALL hackers, but they",
  "will stop most common threats that hit everyday games.",
  "",
  "Over a year of dedicated Luau experience, focused",
  "on exploit detection and game security architecture.",
  "",
  "DM me on Discord: version11111.",
];

const termText = termLines.join("\n");
let ki = 0;
const termEl     = document.getElementById("term-text");
const termCursor = document.getElementById("term-cursor");

function typeTerm() {
  if (ki < termText.length) {
    if (termText[ki] === "\n") {
      termEl.appendChild(document.createElement("br"));
    } else {
      termEl.appendChild(document.createTextNode(termText[ki]));
    }
    ki++;
    setTimeout(typeTerm, 9);
  } else {
    termCursor.style.display = "none";
  }
}

setTimeout(typeTerm, 1600);

/* ===== SCROLL REVEAL ===== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("active"); });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ===== SMOOTH SCROLL NAV ===== */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ===== COPY DISCORD ===== */
function copyDiscord() {
  navigator.clipboard.writeText("version11111.").then(() => {
    const msg  = document.getElementById("copied-msg");
    const hint = document.getElementById("copy-hint");
    msg.style.display  = "block";
    hint.style.display = "none";
    setTimeout(() => {
      msg.style.display  = "none";
      hint.style.display = "";
    }, 2200);
  });
}

/* ===== TABLE DRAG SCROLL ===== */
const tableScroll = document.querySelector(".table-scroll");
if (tableScroll) {
  let isDown = false, startX, scrollLeft;
  tableScroll.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - tableScroll.offsetLeft;
    scrollLeft = tableScroll.scrollLeft;
  });
  tableScroll.addEventListener("mouseleave", () => isDown = false);
  tableScroll.addEventListener("mouseup",    () => isDown = false);
  tableScroll.addEventListener("mousemove",  e => {
    if (!isDown) return;
    e.preventDefault();
    const x    = e.pageX - tableScroll.offsetLeft;
    const walk = (x - startX) * 1.5;
    tableScroll.scrollLeft = scrollLeft - walk;
  });
}
