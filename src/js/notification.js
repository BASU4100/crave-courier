import '../css/notification.css';

export function notificationPage() {
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    contentDiv.classList.remove("formPage");
    if (!contentDiv.classList.contains("commonPage"))
        contentDiv.classList.add("commonPage");

    //Notification Array
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    const notifs = [
        // Format of object
        {
            image: images['Pizza.jpg'],
            heading: 'Cheat Day, Monday!!!',
            description: 'Ipsa autem excepturi et ab quas velit sunt cumque adipisci soluta optio illum culpa distinctio non facere beatae nostrum quasi expedita, assumenda officiis corrupti provident? Perferendis nisi voluptas quam fugiat?'
        },
    ];
        
    //Loop to get all the notifs
    const textDiv = document.createElement("p");
    textDiv.innerHTML = "No Notifications Yet."
    if (notifs.length == 0) {
        contentDiv.appendChild(textDiv);
    }
    else {
        for (let notif of notifs) {
            const notificationCardDiv = document.createElement("div");
            notificationCardDiv.classList.add("notificationCard");
            let newChild = document.createElement("img");
            newChild.src = notif.image;
            notificationCardDiv.appendChild(newChild);
            newChild = document.createElement("p");
            newChild.innerHTML = notif.heading;
            notificationCardDiv.appendChild(newChild);
            newChild = document.createElement("p");
            newChild.innerHTML = notif.description;
            notificationCardDiv.appendChild(newChild);
            newChild = document.createElement("button");
            newChild.innerHTML = "X";
            notificationCardDiv.appendChild(newChild);
            contentDiv.appendChild(notificationCardDiv);

            //Delete Notification
            newChild.addEventListener("click", (e) => {
                e.preventDefault();
                contentDiv.removeChild(e.target.parentElement);
                if (contentDiv.childElementCount == 0){
                    contentDiv.appendChild(textDiv);
                }
            });
        }
    }
}

//Import all images from a folder
function importAll(r) {
    const images = {};
    r.keys().forEach((key) => {
        const fileName = key.replace('./', '');
        images[fileName] = r(key);
    });
    return images;
}