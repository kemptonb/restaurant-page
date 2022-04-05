
//content container
const content = document.querySelector('#content');

//header and divider
const head = document.createElement("h1");
head.textContent = "A V A N T - G R U B";
head.setAttribute("id", "head");
content.appendChild(head);

const divider = document.createElement("HR");
divider.setAttribute("id", "divider");
head.appendChild(divider);

//navBar
const navBarWrap = document.createElement("ul");
navBarWrap.setAttribute("id", "navBarWrap");
content.appendChild(navBarWrap);

const navBar = document.createElement("ul");
navBar.setAttribute("id", "navBar");
navBarWrap.appendChild(navBar);

const navTab1 = document.createElement("li");
navTab1.textContent = "about";
navTab1.setAttribute("id", "navTab");
navBar.appendChild(navTab1);

const navTab2 = document.createElement("li");
navTab2.setAttribute("id", "navTab");
navTab2.textContent = "menu";
navBar.appendChild(navTab2);

const navTab3 = document.createElement("li");
navTab3.setAttribute("id", "navTab");
navTab3.textContent = "contact";
navBar.appendChild(navTab3);

const divider2 = document.createElement("HR");
divider2.setAttribute("id", "divider2");
content.appendChild(divider2);