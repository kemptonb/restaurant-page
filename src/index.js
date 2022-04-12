import homePage from './homePage.js';
import about from './about.js';
import menu from './menu.js';
import reserve from "./reserve";



 const renderPage = async () => {
    let pageLoad = () => {
        //content container
        let content = document.querySelector('#content');
       
        homePage();
    }
    await import('./homePage.js').then(pageLoad());
  }  
  export default renderPage();


