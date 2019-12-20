import {templates} from '../settings.js';
import utils from '../utils.js';

class Home{
  constructor(homeWrapper){
    const thisHome = this;

    thisHome.Carousel();
    thisHome.render(homeWrapper);
  }

  Carousel(){
    const thisHome = this;

    console.log('thisHome: ', thisHome);
    //document.querySelectorAll();

    //click on a dot-link

    //remove active from other dots-links

    //add active to the clicked dot-link

    //from the clicked dot take href

    //find element with that href

  }

  render(homeWrapper){
    const thisHome = this;

    const generatedHTML = templates.home();
    //console.log('html:', generatedHTML);
    thisHome.dom = {};
    thisHome.dom.wrapper = homeWrapper;
    thisHome.dom.wrapper = utils.createDOMFromHTML(generatedHTML);
    //console.log('dom: ', thisHome.dom);
    homeWrapper.appendChild(thisHome.dom.wrapper);
  }
}
export default Home;
