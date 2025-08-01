import '../css/template.css';
import { homepage } from './home';

const homeBtn = document.querySelector(".home");
window.onload = function() {
    homeBtn.click();
};
homeBtn.addEventListener("click", homepage);