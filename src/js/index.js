import '../css/template.css';
import { homepage } from './home';
import { billsPage } from './bills';


//Home Page
const homeBtn = document.querySelector(".home");
window.onload = function() {
    homeBtn.click();
};
homeBtn.addEventListener("click", homepage);

//Bills Page
const billsBtn = document.querySelector(".bills");
billsBtn.addEventListener("click", billsPage);