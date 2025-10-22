document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Dưới đây là video ... ",
    "a tập múa khoảng 1 tháng  đấy😶‍🌫️😶‍🌫️ ....",
    "xem xong thấy hay thì nhớ khen nhé hehe!! ",
  ];

  const phraseEl = document.getElementById("phrase");
  const gifSection = document.getElementById("gifSection");
  const viewGifBtn = document.getElementById("viewGifBtn");
  const curtain = document.getElementById("curtain");
  const jokeMessage = document.getElementById("jokeMessage");
  const nextPageContainer = document.getElementById("nextPageContainer");

  const FADE_DURATION = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--fade-duration")
  );
  const VISIBLE_DURATION = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--visible-duration")
  );
  let currentIndex = 0;

  function showPhrase() {
    phraseEl.textContent = phrases[currentIndex];
    phraseEl.classList.add("visible");

    if (currentIndex >= phrases.length - 1) {
      setTimeout(() => {
        gifSection.classList.remove("hidden");
        gifSection.classList.add("fade-in");
      }, VISIBLE_DURATION);
    } else {
      setTimeout(() => {
        phraseEl.classList.remove("visible");
        setTimeout(() => {
          currentIndex++;
          showPhrase();
        }, FADE_DURATION);
      }, VISIBLE_DURATION);
    }
  }
  showPhrase();
  viewGifBtn.addEventListener("click", () => {
    curtain.classList.add("removed");
    viewGifBtn.style.display = "none";
    
    setTimeout(() => {
      jokeMessage.classList.remove("hidden");
      jokeMessage.classList.add("fade-in");
    }, 3000);

    setTimeout(() => {
      nextPageContainer.classList.remove("hidden");
      nextPageContainer.classList.add("fade-in");
    }, 5000);
  });

  document.querySelector(".next-page").addEventListener("click", () => {
    window.location.href = "page3.html";
  });
});
