function lorem(num) {
  const string =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt odit, veritatis dicta iste a culpa dolorum hic unde, totam tenetur perferendis doloribus officia. Quasi quae unde sequi recusandae, animi, quas, consectetur natus autem ex eius fugit alias molestias. Voluptatibus, alias possimus! Odio natus perspiciatis magnam qui. Iste, quos facere?";
  const words = string.split(" ");
  let numOfWords = num;
  let randomText = [];

  while (--numOfWords)
    randomText.push(words[Math.floor(Math.random() * words.length)]);
  return randomText.join(" ");
}

const generateLorem = lorem(12);

const movies = [
  "Reservoir Dogs",
  "Pulp Fiction",
  "Jackie Brown",
  "Kill Bill : Volume 1",
  "Kill Bill : Volume 2",
  "Boulevard de la mort (Death Proof)",
  "Inglourious Basterds",
  "Django Unchained",
  "Les Huit Salopards (The Hateful Eight)",
  "Once Upon a Time… in Hollywood",
];

/*      Select elements (nodes) methods        */

let menu = document.getElementById("intro");
menu.innerHTML = "introduction";

//let section1 = document.querySelector(".section-1 p");
//section1.innerHTML = generateLorem;

/*      Create,  append , remove elements (nodes) methods      */

let section2 = document.querySelector(".section-2");

// Add text in element selected
let h2 = section2.querySelector("h2");
h2.textContent = "Loading Movies";

// Add tag (+text) in element selected
let p = section2.querySelector(".some");
p.innerHTML = "<strong>Tarantino</strong>'s Films list :";

// Create element and append child in element
let ul = document.createElement("ul");
section2.appendChild(ul);

movies.forEach(function (item) {
  let li = document.createElement("li");
  let txt = document.createTextNode(item);
  li.appendChild(txt);
  ul.appendChild(li);
});

// Remove an element
let intro = document.querySelector(".intro");
let parent = document.querySelector("header");
parent.removeChild(intro);
