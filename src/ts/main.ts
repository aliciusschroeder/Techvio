/** @format */

// ! Skills Progress Bar Fill When Appear
const serves = document.querySelector(".about-company") as HTMLDivElement;
const allServes = document.querySelectorAll(
  ".analyt .line span"
) as NodeListOf<HTMLSpanElement>;
let flag: boolean = true;

window.addEventListener("scroll", () => {
  if (window.scrollY >= serves.offsetTop - 250 && flag) {
    allServes.forEach((serve: any) => {
      serve.style.width = serve.dataset.prog;
    });
    flag = false;
  }
});

// ! start count Of Stats
const stats = document.getElementById("subscribe") as HTMLElement;
const number = document.querySelectorAll(
  ".subscribe .timer .number"
) as NodeListOf<HTMLSpanElement>;
let start = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 450) {
    if (!start) {
      number.forEach((num) => startCount(num));
    }
    start = true;
  }
});

function startCount(el: any) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 5000 / goal);
}
