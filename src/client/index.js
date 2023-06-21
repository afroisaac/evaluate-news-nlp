import { blankInputChecker, urlChecker } from './js/inputChecker';
import { handleSubmit, postHandler } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';

import logo from './images/logo.png';

const logoElement = document.querySelector('.logo');
logoElement.setAttribute('src', logo);


export { 
    blankInputChecker,
    urlChecker,
    handleSubmit,
    postHandler
}
