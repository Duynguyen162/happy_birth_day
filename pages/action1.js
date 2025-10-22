const phrases = [
  "Hello hello 👋",
  "Hôm nay có người đặc biệt được thêm 1 tuổi nè 🎂",
  "Xem cho hết đừng bỏ giữa chừng nha😳",
];
const fadeDuration = 1000;
const visibleDuration = 2500;

const el = document.getElementById("phrase");

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

async function displayOne(text) {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    el.textContent = text;
    el.classList.add("visible");
    await wait(visibleDuration);
    return;
  }
  el.textContent = text;
  await new Promise(requestAnimationFrame);

  el.classList.add("visible");
  await wait(fadeDuration + visibleDuration);

  el.classList.remove("visible");
  await wait(fadeDuration);
}

(async function loopPhrases() {
  if (!phrases || phrases.length === 0) return;
  let i = 0;

  await wait(1500);

  while (true) {
    const text = phrases[i % phrases.length];
    try {
      await displayOne(text);
    } catch (err) {
      console.error("Lỗi khi hiển thị câu:", err);
    }
    i++;
  }
})();

window.setPhrases = function (newArray) {
  if (!Array.isArray(newArray)) throw new Error("setPhrases: cần truyền mảng");
  phrases.length = 0;
  newArray.forEach((s) => phrases.push(String(s)));
};

setTimeout(() => {
  const btn = document.querySelector(".button-container");
  btn.style.display = "block";
  btn.style.animation = "fadeIn 1s ease forwards";
}, 15000);

document.querySelector(".next-page").addEventListener("click", () => {
  window.location.href = "page2.html";
});
