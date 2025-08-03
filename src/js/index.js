import '../css/template.css';
import { homepage } from './home';
import { billsPage } from './bills';
import { walletPage } from './wallet';


//Home Page
const homeBtn = document.querySelector(".home");
window.onload = function() {
    homeBtn.click();
};
homeBtn.addEventListener("click", homepage);

//Bills Page
const billsBtn = document.querySelector(".bills");
billsBtn.addEventListener("click", billsPage);

//Wallet Page
const walletBtn = document.querySelector(".wallet");
walletBtn.addEventListener("click", walletPage);