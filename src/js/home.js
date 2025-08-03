import '../css/home.css';
import bookmark_outline from '../icons/bookmark-outline.svg';
import bookmark from '../icons/bookmark.svg';

export function homepage () {
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";

    const recommendFunc = recommend();
    contentDiv.appendChild(recommendFunc.recommendationDiv);

    const menuFunc = menu();
    contentDiv.appendChild(menuFunc.menuContainerDiv);
    
    const step = 80;
    
    //Scroll event listener for recommendation
    const recommendLeftStep = document.querySelector(".recommendationCardScroll > .left-step");
    const recommendRightStep = document.querySelector(".recommendationCardScroll > .right-step");

    recommendLeftStep.addEventListener("click", (e) => {
        e.preventDefault();
        recommendFunc.recommendationCardDiv.scrollBy({
            left: -step,
            behavior: 'smooth'
        });
    });
    
    recommendRightStep.addEventListener("click", (e) => {
        e.preventDefault();
        recommendFunc.recommendationCardDiv.scrollBy({
            left: step,
            behavior: 'smooth'
        });
    });

    //Scroll event listener for filter
    const filterLeftStep = document.querySelector(".filterCardScroll > .left-step");
    const filterRightStep = document.querySelector(".filterCardScroll > .right-step");

    filterLeftStep.addEventListener("click", (e) => {
        e.preventDefault();
        menuFunc.filterCardDiv.scrollBy({
            left: -step,
            behavior: 'smooth'
        });
    });
    
    filterRightStep.addEventListener("click", (e) => {
        e.preventDefault();
        menuFunc.filterCardDiv.scrollBy({
            left: step,
            behavior: 'smooth'
        });
    });
}

//Recommendation block
function recommend() {
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
    stepBtn.classList.add("recommendationCardScroll");
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

    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    //Card object
    const recommendations = [
        {
            image : images['Salad.jpg'],
            item_name : "Fresh Salad",
            price : 60
        },
        {
            image : images['Cold coffee.jpg'],
            item_name : "Cold Coffee",
            price : 150
        },
        {
            image : images['Butter Chicken.jpg'],
            item_name : "Butter Chicken",
            price : 220
        },
        {
            image : images['Burger.jpg'],
            item_name : "Big Burger",
            price : 120
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
        subChild.innerHTML = "Rs. " + item.price;
        newChild.appendChild(subChild);
        recommendationCardDiv.appendChild(newChild);
    }
    recommendationDiv.appendChild(recommendationCardDiv);

    return { recommendationDiv, recommendationCardDiv };
}

//Menu block
function menu() {
    const menuContainerDiv = document.createElement("div");
    menuContainerDiv.classList.add("menuContainer");

    //Filter block
    const filterDiv = document.createElement("div");
    filterDiv.classList.add("filter");
    //Filter Info
    const filterHeadDiv = document.createElement("div");
    filterHeadDiv.classList.add("filterInfo");
    //Heading
    let newChild = document.createElement("p");
    newChild.innerHTML = "Menu Category";
    filterHeadDiv.appendChild(newChild);
    //Scroll buttons
    const stepBtn = document.createElement("div");
    stepBtn.classList.add("filterCardScroll");
    newChild = document.createElement("button");
    newChild.classList.add("left-step");
    newChild.innerHTML = "&#11207;";
    stepBtn.appendChild(newChild);
    newChild = document.createElement("button");
    newChild.classList.add("right-step");
    newChild.innerHTML = "&#11208;";
    stepBtn.appendChild(newChild);
    filterHeadDiv.appendChild(stepBtn);
    filterDiv.appendChild(filterHeadDiv);
    
    // Filter cards div
    const filterCardDiv = document.createElement("div");
    filterCardDiv.classList.add("filterCards");

    let images = importAll(require.context('../icons', false, /\.(png|jpe?g|svg)$/));
    //Card object
    const filters = [
        {
            image : images['food-fork-drink.svg'],
            filter_name : "All Menus"
        },
        {
            image : images['food-outline.svg'],
            filter_name : "Burger"
        },
        {
            image : images['pizza.svg'],
            filter_name : "Pizza"
        },
        {
            image : images['glass-cocktail.svg'],
            filter_name : "Drinks"
        },
        {
            image : images['coffee-outline.svg'],
            filter_name : "Coffee"
        },
        {
            image : images['ice-cream.svg'],
            filter_name : "Desert"
        },
        {
            image : images['noodles.svg'],
            filter_name : "Noodles"
        },
        {
            image : images['food-drumstick-outline.svg'],
            filter_name : "Non-Veg"
        },
        {
            image : images['jellyfish-outline.svg'],
            filter_name : "Seafood"
        },
        {
            image : images['food-apple-outline.svg'],
            filter_name : "Healthy"
        }
    ];
    //Card generator loop
    for (let item of filters) {
        newChild = document.createElement("div");
        newChild.classList.add("filter-card");
        const boxDiv = document.createElement("div");
        let subChild = document.createElement("img");
        subChild.src = item.image;
        boxDiv.appendChild(subChild);
        newChild.appendChild(boxDiv);
        subChild = document.createElement("p");
        subChild.innerHTML = item.filter_name;
        newChild.appendChild(subChild);
        filterCardDiv.appendChild(newChild);
    }
    filterDiv.appendChild(filterCardDiv);
    menuContainerDiv.appendChild(filterDiv);

    //Horizontal line
    menuContainerDiv.appendChild(document.createElement("hr"));

    //Menu heading
    newChild = document.createElement("p");
    newChild.innerHTML = "Choose Order";
    menuContainerDiv.appendChild(newChild);

    //Menu block
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    //Menu object
    const menus = [
        {
            image: images['Butter Chicken.jpg'],
            item_name: 'Butter Chicken',
            item_desc: 'Butter chicken is a type of curry made from chicken cooked in a spiced tomato and butter-based gravy.',
            price: 220
        },
        {
            image: images['Momo.jpg'],
            item_name: 'Chicken Momo',
            item_desc: 'Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine.',
            price: 100
        },
        {
            image: images['Pizza.jpg'],
            item_name: 'Pizza',
            item_desc: 'Pizza and its variants are among the most popular foods in the world.',
            price: 240.99
        },
        {
            image: images['Oreo Shake.jpg'],
            item_name: 'Oreo Shake',
            item_desc: 'A deliciously creamy Oreo milkshake made by blending milk, ice cream, and cookies together.',
            price: 165.99
        },
        {
            image: images['Paneer.jpg'],
            item_name: 'Paneer Do-Pyaza',
            item_desc: 'Paneer do pyaza is a rich, creamy curry of soft succulent paneer and plenty of onions.',
            price: 280.99
        },
        {
            image: images['Naan.jpg'],
            item_name: 'Butter Naan',
            item_desc: 'Butter naan is a type of leavened flatbread made from flour, yeast, yogurt, and butter.',
            price: 60
        },
        {
            image: images['Salad.jpg'],
            item_name: 'Fresh Salad',
            item_desc: 'Fresh water and fiber rich vegetables, along with salt, peppar and lemon on the side.',
            price: 60
        },
        {
            image: images['Cappucino.jpg'],
            item_name: 'Cappucino',
            item_desc: 'A cappuccino is a hot coffee drink made with layering of espresso, steamed milk, and milk foam on top.',
            price: 90.99
        },
    ];
    //Loop to create menu cards from the menu object
    for (let item of menus) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("menuCard");
        newChild = document.createElement("img");
        newChild.src = item.image;
        cardDiv.appendChild(newChild);
        newChild = document.createElement("p");
        newChild.innerHTML = item.item_name;
        let subChild = document.createElement("img");
        subChild.src = bookmark_outline;
        newChild.appendChild(subChild);
        subChild.addEventListener("click", () => {
            subChild.src = ((subChild.src == bookmark)?bookmark_outline:bookmark);
        });
        cardDiv.appendChild(newChild);
        newChild = document.createElement("p");
        newChild.innerHTML = item.item_desc;
        cardDiv.appendChild(newChild);
        newChild = document.createElement("p");
        newChild.innerHTML = "Rs. " + item.price;
        cardDiv.appendChild(newChild);
        menuDiv.appendChild(cardDiv);
    }

    menuContainerDiv.appendChild(menuDiv);

    return { menuContainerDiv, filterCardDiv };
}

//import all images from a folder
function importAll(r) {
    const images = {};
    r.keys().forEach((key) => {
        const fileName = key.replace('./', '');
        images[fileName] = r(key);
    });
    return images;
}