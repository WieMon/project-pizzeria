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
    let i = 0;
    const carousel = [];
    const time = 3000;

    carousel[0] = '.carousel-0';
    carousel[1] = '.carousel-1';
    carousel[2] = '.carousel-2';

    console.log('carousel0: ', carousel[0]);

    function changeCarousel() {
      const car = document.querySelector('.carousel');
      console.log('carousel: ',car);
    }

    if(i < carousel.length - 1){
      i++;
    } else {
      i = 0;
    }

    changeCarousel();

    setTimeout(changeCarousel(), time);
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
