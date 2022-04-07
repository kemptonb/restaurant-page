const menu = () =>{
    console.log("mod2")
    
    //About Page Module

    //change justify content of body, so title shows at top of page
    document.body.style.justifyContent = "normal";
    
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
    
    //content
    const div1 = document.createElement("h1");
    div1.setAttribute("id", "divCont");
    content.appendChild(div1);

    //menu
    const head2 = document.createElement("h3");
    head2.textContent = "M E N U";
    head2.setAttribute("id", "subHead");
    div1.appendChild(head2);

    //items
    const menuHead1 = document.createElement("h5");
    menuHead1.textContent = "item one";
    menuHead1.setAttribute("id", "menuSubHead");
    div1.appendChild(menuHead1);

    const para1 = document.createElement("p");
    let contString1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, a
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    para1.textContent = contString1.toLocaleLowerCase();
    div1.appendChild(para1);

    const menuHead2 = document.createElement("h5");
    menuHead2.textContent = "item two";
    menuHead2.setAttribute("id", "menuSubHead");
    div1.appendChild(menuHead2);

    const para2 = document.createElement("p");
    let contString2 = `Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat.`;
    para2.textContent = contString2.toLocaleLowerCase();
    div1.appendChild(para2);

    const menuHead3 = document.createElement("h5");
    menuHead3.textContent = "item three";
    menuHead3.setAttribute("id", "menuSubHead");
    div1.appendChild(menuHead3);

    const para3 = document.createElement("p");
    let contString3 = `Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur.`;
    para3.textContent = contString3.toLocaleLowerCase();
    div1.appendChild(para3);

    const menuHead4 = document.createElement("h5");
    menuHead4.textContent = "item four";
    menuHead4.setAttribute("id", "menuSubHead");
    div1.appendChild(menuHead4);

    const para4 = document.createElement("p");
    let contString4 = ` Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    para4.textContent = contString4.toLocaleLowerCase();
    div1.appendChild(para4);



    }//end homePage()
    
    export default menu;