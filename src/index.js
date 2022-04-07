import homePage from './homePage.js';
import about from './about.js';
import menu from './menu.js';
import reserve from "./reserve";



(async () => {
    let pageLoad = () => {

        //content container
        const content = document.querySelector('#content');
    
    
        const changePage = {
            homePage: () => { homePage();},
    
            aboutPage: () => { about();},
    
            menuPage: () => { menu(); },
    
            reservePage: () => { reserve();},

            test: () => {alert("hi");}
    
        };
    
        
      //return {homePage, about, menu, reserve};
    
    }
    await import('./homePage.js').then(pageLoad());
        let pageDisplay = homePage();
        return pageDisplay;
  })();  



  