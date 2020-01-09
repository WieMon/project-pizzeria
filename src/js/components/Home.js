import {templates} from '../settings.js';
import utils from '../utils.js';

class Home{
  constructor(homeWrapper){
    const thisHome = this;

    thisHome.render(homeWrapper);
    thisHome.Carousel();
  }

  Carousel(){
    //const thisHome = this;

    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const numberOfSlides = carouselSlides.length;
    let activeSlide = 0;
    const time = 3000;

    console.log('carouselSlides: ', carouselSlides);



    // wszystkie slajdy domyslnie ukryte
    /*for(let slide of carouselSlides){
      slide.style.display = 'none';
    }*/
    console.log(carouselSlides);
    setInterval(function(){
      for(let slide of carouselSlides){
        slide.classList.remove('active');
        //slide.style.display = 'none';
        console.log(slide);
      }

      //carouselSlides[activeSlide].style.display = 'block';

      activeSlide++;

      if(activeSlide >= numberOfSlides) {
        activeSlide = 0;
      }

      carouselSlides[activeSlide].classList.add('active');

    }, time);
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
