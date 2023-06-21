import { checkForName } from './js/inputChecker';
import { handleSubmit } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';

import logo from './images/logo.png';

const logoElement = document.querySelector('.logo');
logoElement.setAttribute("src", logo);

console.log(checkForName);

alert("I EXIST");
console.log("CHANGE!!");

export { checkForName, handleSubmit }
