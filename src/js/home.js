import '../css/home.css';

export function homepage () {
    const contentDiv = document.querySelector(".content");

    //Recommendation block
    const recommendationDiv = document.createElement("div");
    recommendationDiv.classList.add("recommendation");

    //Info div
    const recommendationHeadDiv = document.createElement("div");
    recommendationHeadDiv.classList.add("recommendationInfo");
    //Heading
    let newChild = document.createElement("p");
    newChild.innerHTML = "Recommendations";
    recommendationHeadDiv.appendChild(newChild);
    //Scroll buttons
    const stepBtn = document.createElement("div");
    newChild = document.createElement("button");
    newChild.classList.add("left-step");
    newChild.innerHTML = "&#11207;";
    stepBtn.appendChild(newChild);
    newChild = document.createElement("button");
    newChild.classList.add("right-step");
    newChild.innerHTML = "&#11208;";
    stepBtn.appendChild(newChild);
    recommendationHeadDiv.appendChild(stepBtn);
    recommendationDiv.appendChild(recommendationHeadDiv);

    //Cards div
    const recommendationCardDiv = document.createElement("div");
    recommendationCardDiv.classList.add("recommendationCards");
    //import images from images folder
    const importAll = (r) => {
        const images = {};
        r.keys().forEach((key) => {
            const fileName = key.replace('./', '');
            images[fileName] = r(key);
        });
        return images;
    };

    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    //Card object
    const recommendations = [
        {
            image : images['Salad.jpg'],
            item_name : "Fresh Salad",
            price : "Rs. 60"
        },
        {
            image : images['Cold coffee.jpg'],
            item_name : "Cold Coffee",
            price : "Rs. 150"
        },
        {
            image : images['Butter Chicken.jpg'],
            item_name : "Butter Chicken",
            price : "Rs. 220"
        },
        {
            image : images['Burger.jpg'],
            item_name : "Big Burger",
            price : "Rs. 120"
        }
    ];
    //Card generator loop
    for (let item of recommendations) {
        newChild = document.createElement("div");
        newChild.classList.add("recommendation-card");
        let subChild = document.createElement("img");
        subChild.src = item.image;
        newChild.appendChild(subChild);
        subChild = document.createElement("p");
        subChild.innerHTML = item.item_name;
        newChild.appendChild(subChild);
        subChild = document.createElement("p");
        subChild.innerHTML = item.price;
        newChild.appendChild(subChild);
        recommendationCardDiv.appendChild(newChild);
    }
    recommendationDiv.appendChild(recommendationCardDiv);
    contentDiv.appendChild(recommendationDiv);

    //Scroll event listner
    const step = 80;

    const leftStep = document.querySelector(".left-step");
    const rightStep = document.querySelector(".right-step");

    leftStep.addEventListener("click", (e) => {
        e.preventDefault();
        recommendationCardDiv.scrollBy({
            left: -step,
            behavior: 'smooth'
        });
    });
    
    rightStep.addEventListener("click", (e) => {
        e.preventDefault();
        recommendationCardDiv.scrollBy({
            left: step,
            behavior: 'smooth'
        });
    });
}