let list = document.querySelector(".qualification-pages");
const massCards = [
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
}

let boot = document.querySelector(".qualification-pages");
const massCar = [
  {
    img: "./Fortnite2.jpg",
    title: "fortnite",
    type: "FPS",
    price: "10$",
  },
  {
    img: "./HOI4.jpg",
    title: "HOI4",
    price: "40$",
    type: "стратегическая игра",
  },
  {
    img: "./Overwatch.jpg",
    title: "Overwatch",
    price: "40$",
    type: "командная игра",
  },
];
console.log(massCar);
for (let i = 0; i < massCar.length; i++) {
  console.log(i);
  list.insertAdjacentHTML(
    "afterbegin",
    ` <article class="developments">
        <img class="pict" src=${massCar[i].img} alt="" />
        <h3>${massCar[i].title}</h3>
        <h3>${massCar[i].type}</h3>
        <h6>${massCar[i].price}<h6>
        <button>Купить</button>
      <article>`
  );
}

let hours = document.getElementById("hours");
let min = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let Start = document.getElementsByClassName("start")
let inputs = document.getElementsByClassName("input-time")

function Timer(h, m, s) {
   const times = setInterval(() => {
  seconds.innerText = s;
  min.innerText = m;
  hours.innerText = h;
  s--;
  if (s == 0) {
    m--;
    s = 60;
  }
  if (m == 0) {
    h--;
    m = 60;
  }
  if (h < 0) {
    clearInterval(times);
    seconds.innerText = 0;
    min.innerText = 0;
    hours.innerText = 0;
  }
}, 1000);  
}

let isTimer = false
Start[0].onclick = () => {
  
  let h = inputs[0].value;
  let m = inputs[1].value;
  let s = inputs[2].value;
 Timer(h, m, s)
}