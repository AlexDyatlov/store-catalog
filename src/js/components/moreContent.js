if (document.querySelector(".catalog")) {
  let startNum = 5;
  const moreBtn = document.querySelector(".catalog__more"),
        el = document.querySelectorAll(".catalog__item").length;

  moreBtn.addEventListener("click", elem => {
      startNum += 5;

      const content = Array.from(document.querySelector(".catalog__inner").children).slice(0, startNum);
      content.forEach(startNum => startNum.classList.add("is-visible")),
      content.length === el && (moreBtn.style.display = "none")
  })
}