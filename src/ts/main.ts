/** @format */

// !Sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header") as HTMLElement;
  const img = document.querySelector("header img") as HTMLImageElement;

  if (window.scrollY >= 50) {
    header.classList.add("scroll");
    img.src = "assets/images/logo-black.png";
  } else {
    header.classList.remove("scroll");
    img.src = "assets/images/logo.png";
  }
});

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

// ! Making Scroll To Top Button Visible
const toTop = document.getElementById("top") as HTMLSpanElement;
window.addEventListener("scroll", () => {
  window.scrollY >= 1000
    ? (toTop.style.top = "93vh")
    : (toTop.style.top = "-60px");
});

//! Select all buttons and define the button array
let btns = document.querySelectorAll(
  ".blog-side .buttonrl"
) as NodeListOf<HTMLButtonElement>;
let btnArr: string[] = ["#button4", "#button3", "#button2", "#button1"];

const getActiveIndex = (): number => {
  return btnArr.findIndex((btnSelector) =>
    document.querySelector(btnSelector)?.classList.contains("active")
  );
};

btns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let currIndex = getActiveIndex();

    if (index === 0 && currIndex < 3) {
      currIndex += 1;
    } else if (index !== 0 && currIndex > 0) {
      currIndex -= 1;
    }

    btnArr.forEach((btnSelector) => {
      document.querySelector(btnSelector)?.classList.remove("active");
    });
    document.querySelector(btnArr[currIndex])?.classList.add("active");
  });
});

btnArr.forEach((btnSelector) => {
  let btnElement = document.querySelector(btnSelector);

  if (btnElement) {
    btnElement.addEventListener("click", () => {
      btnArr.forEach((selector) => {
        document.querySelector(selector)?.classList.remove("active");
      });
      btnElement.classList.add("active");
    });
  }
});
