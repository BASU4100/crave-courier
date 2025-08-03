import '../css/bills.css';

export function billsPage() {
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";

    //Bills Array
    const bills = [
        // Format for data entry
        // {
        //     date: '03-08-2025',
        //     items: {
        //         item_name: ['Big Burger', 'Oreo Shake'],
        //         quantity: [2, 2],
        //         price: [120, 165.99],
        //     }
        // }
    ];

    //Loop to get bills
    if (bills.length == 0) {
        const textDiv = document.createElement("p");
        textDiv.innerHTML = "Not ordered yet.";
        contentDiv.appendChild(textDiv);
    }
    else {
        for (let bill of bills) {
            const billCard = document.createElement("div");
            billCard.classList.add("billCard");
            let newChild = document.createElement("p");
            newChild.innerHTML = bill.date;
            billCard.appendChild(newChild);

            //Tablular item list and total amount
            newChild = document.createElement("table");
            let tableRow = document.createElement("tr");
            let tableHead = document.createElement("th");
            tableHead.colSpan = 2;
            tableHead.scope = "col";
            tableHead.innerHTML = "Item";
            tableRow.appendChild(tableHead);
            tableHead = document.createElement("th");
            tableHead.scope = "col";
            tableHead.innerHTML = "Quantity";
            tableRow.appendChild(tableHead);
            tableHead = document.createElement("th");
            tableHead.scope = "col";
            tableHead.innerHTML = "Price";
            tableRow.appendChild(tableHead);
            newChild.appendChild(tableRow);

            //Items in the order
            let total = 0;
            for (let index in bill.items.item_name) {
                tableRow = document.createElement("tr");
                let tableData = document.createElement("td");
                tableData.colSpan = 2;
                tableData.innerHTML = bill.items.item_name[index];
                tableRow.appendChild(tableData);
                tableData = document.createElement("td");
                tableData.innerHTML = bill.items.quantity[index];
                tableRow.appendChild(tableData);
                tableData = document.createElement("td");
                total += (bill.items.quantity[index] * bill.items.price[index]);
                tableData.innerHTML =  "Rs. " + (bill.items.quantity[index] * bill.items.price[index]);
                tableRow.appendChild(tableData);
                newChild.appendChild(tableRow);
            }
            tableRow = document.createElement("tr");
            tableHead = document.createElement("th");
            tableHead.colSpan = 3;
            tableHead.innerHTML = "Total";
            tableRow.appendChild(tableHead);
            let tableData = document.createElement("td");
            tableData.innerHTML = "Rs. " + total;
            tableRow.appendChild(tableData);
            newChild.appendChild(tableRow);
            billCard.appendChild(newChild);

            //Add bill card
            contentDiv.appendChild(billCard);
        }
    }
}