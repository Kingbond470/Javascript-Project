// local reviews data
const reviews = [
  {
    id: 1,
    name: "Mausam Singh",
    job: "web developer",
    img:
      "image/team1.jpg",
    text:
      "New World is rotten. One of the best anime ever exist in detective terms as well as overall",
  },
  {
    id: 2,
    name: "Fatima F",
    job: "Biologist",
    img:
      "image/team4.jpg",
    text:
      "If you have not watched death note yet then you have not watched the best anime ever.",
  },
  {
    id: 3,
    name: "Ashutosh Tiwari",
    job: "Socilogy",
    img:
      "image/team2.jpg",
    text:
      "Hello world should start with death note in anime. Humanity is next religion of human world",
  },
  {
    id: 4,
    name: "Ravan",
    job: "Mechanical Engineer",
    img:
      "image/team3.jpg",
    text:
      "The basic building block of understanding the pain is go through the pain and death note is best on its terms.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
