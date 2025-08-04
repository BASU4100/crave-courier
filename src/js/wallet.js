import "../css/wallet.css";

let balance = 500;
export function walletPage() {
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    contentDiv.classList.remove("formPage");
    if (!contentDiv.classList.contains("commonPage"))
        contentDiv.classList.add("commonPage");

    //Balance Block
    const currentBalanceDiv = document.createElement("div");
    currentBalanceDiv.classList.add("currentBalance");

    let newChild = document.createElement("p");
    let subchild = document.createElement("span");
    subchild.classList.add("logo");
    subchild.innerHTML = "CraveCourier";
    newChild.appendChild(subchild);
    newChild.innerHTML += " balance";
    currentBalanceDiv.appendChild(newChild);
    newChild = document.createElement("p");
    newChild.innerHTML = "Rs. " + balance;
    currentBalanceDiv.appendChild(newChild);
    const button = document.createElement("button");
    button.classList.add("addMoney");
    button.innerHTML = "Add Money";
    currentBalanceDiv.appendChild(button);
    contentDiv.appendChild(currentBalanceDiv);
    
    //Effect of Add Money
    button.addEventListener("click", addMoneyUI);
}

function addMoneyUI() {
    const contentDiv = document.querySelector(".content");
    const addMoneyDiv = document.createElement("div");
    addMoneyDiv.classList.add("addMoneyUI");

    const inputForm = document.createElement("div")
    let newChild = document.createElement("label");
    newChild.for = "amount";
    newChild.innerHTML = "Rs.";
    inputForm.appendChild(newChild);
    const input = document.createElement("input");
    input.type = "number";
    input.name = "amount";
    input.id = "amount";
    input.min = 50;
    input.max = 2000;
    input.step = 10;
    input.placeholder = "100";
    input.required = true;
    inputForm.appendChild(input);
    addMoneyDiv.appendChild(inputForm);
    
    newChild = document.createElement("div"); 
    const button_100 = document.createElement("button");
    button_100.value = 100;
    button_100.innerHTML = 100;
    newChild.appendChild(button_100);
    const button_500 = document.createElement("button");
    button_500.value = 500;
    button_500.innerHTML = 500;
    newChild.appendChild(button_500);
    const button_1000 = document.createElement("button");
    button_1000.value = 1000;
    button_1000.innerHTML = 1000;
    newChild.appendChild(button_1000);
    addMoneyDiv.appendChild(newChild);
    
    newChild = document.createElement("button");
    newChild.classList.add("addMoney");
    newChild.innerHTML = "Add Money";
    addMoneyDiv.appendChild(newChild);
    contentDiv.appendChild(addMoneyDiv);
    
    //Event listener
    button_100.addEventListener("click", (e) => {
        e.preventDefault();
        input.value = button_100.value;
    });
    button_500.addEventListener("click", (e) => {
        e.preventDefault();
        input.value = button_500.value;
    });
    button_1000.addEventListener("click", (e) => {
        e.preventDefault();
        input.value = button_1000.value;
    });
    newChild.addEventListener("click", () => {
        if (!input.checkValidity())
            return;
        balance += +(input.value);
        const balanceUpdate = document.querySelector(".currentBalance > p:nth-child(2)");
        balanceUpdate.innerHTML = "Rs. " + balance;
        contentDiv.removeChild(addMoneyDiv);
    });

}