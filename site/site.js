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
      <img class="pict" src="./img1.webp" alt="" />
          <h3>Europa Universalis</h3>
          <h3>стратегическая игра</h3>
          <h6>40$</h6>
          <button>Купить</button>
        </article>`
    );
  };

  let lists = document.querySelector(".qualification-pages");
const massCard = [
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
console.log(massCard);
  for (let i = 0; i < massCard.length; i++) {
    console.log(i);
    list.insertAdjacentHTML(
      "afterbegin",
      ` <article class="developments">
      <img class="pict" src="./HOI4.jpg" alt="" />
      <h3>HOI4</h3>
      <h3>стратегическая игра</h3>
      <h6>40$</h6>
      <button>Купить</button>
    </article>`
    );
  };
  let foot = document.querySelector(".qualification-pages");
  const massCardss = [
    {
      name: "",
      univer: "",
      date: "",
    },
  ];
  console.log(massCardss);
    for (let i = 0; i < massCard.length; i++) {
      console.log(i);
      list.insertAdjacentHTML(
        "afterbegin",
        ` <article class="developments">
        <img class="pict" src="./Overwatch.jpg" alt="" />
        <h3>Overwatch</h3>
        <h3>командная игра</h3>
        <h6>40$</h6>
        <button>Купить</button>
      </article>`
      );
    };
    let boot = document.querySelector(".qualification-pages");
  const massCar = [
    {
      name: "",
      univer: "",
      date: "",
    },
  ];
  console.log(massCar);
    for (let i = 0; i < massCard.length; i++) {
      console.log(i);
      list.insertAdjacentHTML(
        "afterbegin",
        ` <article class="developments">
        <img class="pict" src="./Fortnite2.jpg" alt="" />
        <h3>Fortnite</h3>
        <h3>FPS</h3>
        <h6>10$</h6>
        <button>Купить</button>
      </article>`
      );
    };