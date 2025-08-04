import '../css/contact.css';

export function contactPage() {
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    if (!contentDiv.classList.contains("commonPage"))
        contentDiv.classList.add("commonPage");
    if (!contentDiv.classList.contains("formPage"))
        contentDiv.classList.add("formPage");

    //Heading
    let newChild = document.createElement("p");
    newChild.classList.add("contactHeading");
    newChild.innerHTML = "Contact Us";
    contentDiv.appendChild(newChild);

    //Form
    const form = document.createElement("form");
    newChild = document.createElement("label");
    newChild.setAttribute("for", "name");
    newChild.innerHTML = "Name:";
    form.appendChild(newChild);
    newChild = document.createElement("input");
    newChild.name = "name";
    newChild.id = "name";
    newChild.placeholder = "Jhon Doe";
    newChild.required = true;
    form.appendChild(newChild);
    newChild = document.createElement("label");
    newChild.setAttribute("for", "email");
    newChild.innerHTML = "Email:";
    form.appendChild(newChild);
    newChild = document.createElement("input");
    newChild.type = "email";
    newChild.name = "email";
    newChild.id = "email";
    newChild.placeholder = "CraveCourier@example.com";
    newChild.required = true;
    form.appendChild(newChild);
    newChild = document.createElement("label");
    newChild.setAttribute("for", "feedback");
    newChild.innerHTML = "Feedback:";
    form.appendChild(newChild);
    newChild = document.createElement("textarea");
    newChild.name = "feedback";
    newChild.id = "feedback";
    newChild.placeholder = "Write your feedback here.";
    newChild.required = true;
    form.appendChild(newChild);
    contentDiv.appendChild(form);
    newChild = document.createElement("button");
    newChild.type = "submit";
    newChild.innerHTML = "Submit";
    contentDiv.appendChild(newChild);

    //Form submit
    newChild.addEventListener("click", () => {
        newChild = document.querySelectorAll("form > input");
        for (let child of newChild) {
            child.value = "";
        }
        newChild = document.querySelector("form > textarea");
        newChild.value = "";
    })
}