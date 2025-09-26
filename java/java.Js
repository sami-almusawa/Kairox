const btn = document.getElementById('changeBgBtn');

btn.addEventListener('click', () => {
    const colors = ['#22282a', '#58f3b2', '#ff274d', '#f7bcf7', '#333333'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
});

const vid = document.getElementById("myVideo");

// تشغيل عند تمرير الماوس
vid.addEventListener("mouseenter", () => {
  vid.play();
});

// توقف عند الخروج ويعود للصورة (poster)
vid.addEventListener("mouseleave", () => {
  vid.pause();
  vid.currentTime = 0; // يرجع للبداية ويعرض البوستر
});
