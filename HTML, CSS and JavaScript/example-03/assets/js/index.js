// **************************************************************************************
// Buttons functions
// **************************************************************************************

function changeNameColor(element, color) {
    const nameReference = document.getElementById(element);
    nameReference.style.color = color;
}

function changeCardColor(element, className) {
    element.classList.add(className);
    element.classList.remove('text-bg-dark');
}

function resetCardsColors(className) {
    const cardsObject = document.getElementsByClassName(className);

    Array.from(cardsObject).forEach(element => {
        element.style.color = "white";

        if(element.classList.contains('text-bg-danger')) {
            element.classList.add('text-bg-dark');
            element.classList.remove('text-bg-danger');
        } else if(element.classList.contains('text-bg-info')) {
            element.classList.add('text-bg-dark');
            element.classList.remove('text-bg-info');
        } else if(element.classList.contains('text-bg-success')) {
            element.classList.add('text-bg-dark');
            element.classList.remove('text-bg-success');
        }
    });
}

// **************************************************************************************
// API Fetch
// **************************************************************************************

// Start loading text in carousel
let loadingTime = 0;
const intervalId = setInterval(() => {
        loadingTime = ++loadingTime % 4;
        $("#loading").html("loading"+Array(loadingTime+1).join("."));
    }, 500);

// HTTP get petition, returns a JSON file
const getUsers = httpUrl =>
    fetch(httpUrl)
        .then(usersResponse => usersResponse.json())
        .then(usersObject => {
            getUsersFromJSON(usersObject);
            localStorage.setItem("users-json", JSON.stringify(usersObject));
            localStorage.setItem("users-time", new Date());
        })
        .catch(error => console.log(error));

// Loading users when we have it on a JSON file
const getUsersFromJSON = usersObject => {
    // Hiding spinner and showing carousel
    $("#carousel-spinner").addClass("d-none");
    $("#carousel").removeClass("d-none");
    clearInterval(intervalId);

    for (let i = 0; i < usersObject.data.length; i++) {
        const user = usersObject.data[i];
        const carouselItem = $("#user-item").clone().appendTo('#carousel-inner');
        const carouselIndicator = $("#carousel-indicator").clone().appendTo('#carousel-indicators'); 

        // Adding one indicator
        carouselIndicator.attr('id', `carousel-indicator-${i+1}`);
        carouselIndicator.attr('data-bs-slide-to', i);
        carouselIndicator.attr('aria-label', `User ${user.id}`);

        // Changing number of item
        carouselItem.find('[id*="user-img"]').attr('id', `user-img-${i+1}`);
        carouselItem.find('[id*="user-email"]').attr('id', `user-email-${i+1}`);
        carouselItem.find('[id*="user-name"]').attr('id', `user-name-${i+1}`);

        // Showing user data
        carouselItem.find(`[id*="user-img-${i+1}"]`).attr('src', user.avatar);
        carouselItem.find(`[id*="user-email-${i+1}"]`).text(user.email);
        carouselItem.find(`[id*="user-name-${i+1}"]`).text(`${user.first_name} ${user.last_name}`);

        if(i === 0) {
            carouselItem.addClass("active");
            carouselIndicator.addClass("active");
            carouselIndicator.attr("aria-current", "true");
        }
    }

    // Deleting default carousel item
    $("#user-item").remove();
    $("#carousel-indicator").remove();
};

// Verify if users exists locally
const usersJson = localStorage.getItem("users-json");
const usersTime = localStorage.getItem("users-time");

// If users don't exist, start HTTP request
if (usersJson === null || usersTime === null) {
    console.log(`Users data don't exist!\nStarting HTTP request...`);
    const url = "https://reqres.in/api/users?delay=3";
    getUsers(url);
} else {
    const millisecondsDifference = new Date() - Date.parse(usersTime);
    const minutesDifference = Math.round(((millisecondsDifference % 86400000) % 3600000) / 60000);

    // If users exists but are outdated for 1 minute, start HTTP request
    if(minutesDifference === 0) {
        console.log(`Users data is updated!`);
        const usersObject = JSON.parse(localStorage.getItem("users-json"));
        getUsersFromJSON(usersObject);
    } else {
        console.log(`Users data is outdated by 1 minute!\nStarting HTTP request...`);
        const url = "https://reqres.in/api/users?delay=3";
        getUsers(url);
    }
}