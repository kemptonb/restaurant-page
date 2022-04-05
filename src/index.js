
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

//navBarWrap
const navBarWrap = document.createElement("ul");
navBarWrap.setAttribute("id", "navBarWrap");
content.appendChild(navBarWrap);

//navBar
const navBar = document.createElement("ul");
navBar.setAttribute("id", "navBar");
navBarWrap.appendChild(navBar);

//ul, li, a
//tab1
const navTab1 = document.createElement("li");
navTab1.setAttribute("id", "navTab");
navBar.appendChild(navTab1);

const aRef1 = document.createElement("a");
aRef1.href = "http://www.cnn.com/";
aRef1.textContent = "about";
aRef1.setAttribute("id", "aRef");
navTab1.appendChild(aRef1);

//tab2

const navTab2 = document.createElement("li");
navTab2.setAttribute("id", "navTab");
navBar.appendChild(navTab2);

const aRef2 = document.createElement("a");
aRef2.href = "http://www.google.com/";
aRef2.textContent = "menu";
aRef2.setAttribute("id", "aRef");
navTab2.appendChild(aRef2);

//tab3
const navTab3 = document.createElement("li");
navTab3.setAttribute("id", "navTab");
navBar.appendChild(navTab3);


const aRef3 = document.createElement("a");
aRef3.href = "http://www.bing.com/";
aRef3.textContent = "reserve";
aRef3.setAttribute("id", "aRef");
navTab3.appendChild(aRef3);

