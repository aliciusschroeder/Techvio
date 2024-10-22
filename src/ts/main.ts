/** @format */

// !Sticky header
const header = document.querySelector("header") as HTMLElement;
const img = document.querySelector("header img") as HTMLImageElement;
const currentPage = window.location.pathname;

if (currentPage.includes("/landing2.html")) {
  header.classList.add("dark");
  img.src = "assets/images/logo-black.png";
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("scroll");
    img.src = "assets/images/logo-black.png";
  } else {
    header.classList.remove("scroll");
    if (!currentPage.includes("/landing2.html"))
      img.src = "assets/images/logo.png";
  }
});

// !Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // !Skills Progress Bar Fill When Appears
  const serves = document.querySelector(".about-company") as HTMLDivElement;

  if (!serves) {
    return;
  }

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
});

// ! Start Count Of Stats
const stats = document.getElementById("subscribe") as HTMLElement;

if (!stats) {
  // TODO console.warn("The #subscribe section does not exist on this page.");
} else {
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
}

function startCount(numElement: HTMLSpanElement) {
  const targetValue = numElement.dataset.goal;

  if (targetValue) {
    const target = parseInt(targetValue, 10);

    let count = 0;
    const increment = Math.ceil(target / 100);

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      numElement.innerText = count.toString();
    }, 150);
  } else {
    console.warn("data-target attribute is missing on the number element.");
  }
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
