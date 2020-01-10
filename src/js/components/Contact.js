import {templates} from '../settings.js';
import utils from '../utils.js';

class Contact {
  constructor(contactWrapper){
    const thisContact = this;

    thisContact.render(contactWrapper);
  }


  render(contactWrapper){
    const thisContact = this;
    console.log(templates);
    const generatedHTML = templates.contact();
    thisContact.dom = {};
    thisContact.dom.wrapper = contactWrapper;
    thisContact.dom.wrapper = utils.createDOMFromHTML(generatedHTML);
    contactWrapper.appendChild(thisContact.dom.wrapper);
    console.log('Contact', thisContact.wrapper);
  }
}
export default Contact;
