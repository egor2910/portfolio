let h1 = document.getElementsByTagName("h1")

console.log(h1);
let h2Mass = document.getElementsByTagName("h3")
console.log(h2Mass);
h2Mass[0].innerText = "новый заголовок"
let classElem = document.getElementsByClassName
("header-menu-item")
classElem[classElem.length - 1].innerHTML = "fight"

let work = document.getElementById("work")
let educatiom = document.getElementById("education")

console.log(work, education)

// work.style.backgroundColor = "rgb(255,100,0)"
console.log(work.style);
work.onclick = function () {
    education.style.display = "flex"
}

education.onclick = function () {    
    work.style.display = "flex"
}
   
    a = document.querySelectorAll("header-menu-item")

console.log(a);
work.style