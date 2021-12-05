const tarantinoMovies = [
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

/* Select individual Element*/

//Method for access to an element with his ID
let foot = document.getElementById("foot");
let p = document.getElementById("para");
p.textContent = "First Paragraph";

//Method for access to an element with his CSS selector (that return the first match)
let p2 = document.querySelector(".some");
p2.textContent = "Second Paragraph";

/*=======================================================================*/

/*Select multiple elements */

//Method for create a node list and selcted multiple element
let ps = document.querySelectorAll(".main p");

//Select an element in the node list with the item method or array syntax
if (ps.length >= 2) {
  //let thirdItem = ps.item(2);
  let thirdItem = ps[2];
  thirdItem.textContent = "Thirth Paragraph";
}

//Loop througth the node list
for (let i = 0; i < ps.length; i++) {
  ps[i].textContent += " LOOPED";
}

/*=======================================================================*/

/* Access & Updade text node */

//text content collect and update just the text
let main = document.querySelector(".main");
let h2 = document.querySelector("h2");
h2.textContent = "Loading Movies";

//innerHTML adding and removing HTML content
let movieSection = document.querySelector(".section-1");
let movieTitle = movieSection.querySelector("h2");
movieTitle.innerHTML = "List of <strong>Tarantino</strong>'s movies:";

/* adding element
 * step 1 === create the element -> createElement() method
 * step 2 === give it content -> createTextNode() method - if we want add content. not an obligation
 * step 3 === add it to the dom -> appendChild() method
 */
let ul = document.createElement("ul"); //step 1
movieSection.appendChild(ul); //step 2

tarantinoMovies.forEach((item) => {
  let li = document.createElement("li"); //step 1
  let movieTitle = document.createTextNode(item); //step 2
  li.appendChild(movieTitle); //step 3
  ul.appendChild(li); // step3
});

/*REMOVE element
 * step 1 === store the element to be removed in a variable
 * step 2 === store the parent of that element in a variable
 * Remove the element from its containing element
 */
let startFilmList = movieSection.getElementsByTagName("ul")[0];
let lastLi = startFilmList.lastChild;
let lastFilm = lastLi.lastChild;

let removeLastFilm = lastLi;
ul.removeChild(removeLastFilm);
