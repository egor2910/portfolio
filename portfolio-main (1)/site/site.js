let list = document.querySelector(".qualification-pages");
const massCards = [
  {
    name: "",
    univer: "",
    date: "",
  },
  {
   name: "",
    univer: "",
    date: "",
  },
  {
    name: "",
    univer: "",
    date: "",
  },
];
console.log(massCards);
  for (let i = 0; i < massCards.length; i++) {
    console.log(i);
    list.insertAdjacentHTML(
      "afterbegin",
      ` <article class="developments">
          <img src="./img1.webp" alt="" />
          <h3>Europa Universalis</h3>
          <h3>стратегическая игра</h3>
          <h6>40$</h6>
          <button>Купить</button>
        </article>`
    );
  };