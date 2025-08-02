import '../css/template.css';
import { homepage } from './home';



//Home Page
const homeBtn = document.querySelector(".home");
window.onload = function() {
    homeBtn.click();
};
homeBtn.addEventListener("click", homepage);