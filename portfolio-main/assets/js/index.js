let list = document.querySelector(".qualification-page");
let work = document.getElementById("work");
let educatiom = document.getElementById("education");
const massCards = [
  {
    name: "Програмист",
    univer: "ПТУ имени Курицина",
    date: "2000 - 2049",
  },
  {
    name: "Програмист 2",
    univer: "Супер пупер Универ",
    date: "1900 - 1905",
  },
  {
    name: "сисадмин",
    univer: "Шарашина контора",
    date: "2000-2049",
  },
];

console.log(massCards);

work.onclick = function () {
  list.innerHTML = "";

  for (let i = 0; i < massCards.length; i++) {
    console.log(i);
    list.insertAdjacentHTML(
      "afterbegin",
      `<article class="development">
  <h5>${massCards[i].name}</h5>
  <h5>${massCards[i].univer}</h5>
  <h6>${massCards[i].date}</h6>
</article>`
    );
  }
  work.style.color = "red";
  work.style.color = "unset";
};

const edumassCards = [
  {
    name: "Програмист",
    univer: "ПТУ имени Курицина",
    date: "2000 - 2049",
  },
  {
    name: "Програмист 2",
    univer: "Супер пупер Универ",
    date: "1900 - 1905",
  },
];

console.log(edumassCards);
education.onclick = () => {
  list.innerHTML = "";
  for (let i = 0; i < edumassCards.length; i++) {
    console.log(i);
    list.insertAdjacentHTML(
      "afterbegin",
      `<article class="development">
  <h5>${edumassCards[i].name}</h5>
  <h5>${edumassCards[i].univer}</h5>
  <h6>${edumassCards[i].date}</h6>
</article>`
    );
  }
  education.style.color = "red";
  education.style.color = "unset";
};
