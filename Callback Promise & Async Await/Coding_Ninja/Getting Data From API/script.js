const card_container = document.querySelector(".card-container");

function getCard(id) {
    const request = new XMLHttpRequest();

    request.open("GET", `https://dummyjson.com/user/${id}`);

    request.send();

    request.addEventListener("load", () => {
        const jsonData = JSON.parse(request.responseText);
        if (request.status === 400) return;

        displayUser(jsonData);
    });
}

function displayUser(jsonData) {
    const card = `<div class="user-card">
                    <img src=${jsonData.image} alt="Profile Image" />
                    <h3 id="fname">${jsonData.firstName}</h3>
                    <h3 id="lname">${jsonData.lastName}</h3>
                    <p class="email">${jsonData.email}</p>
                    <button class="btn">View Profile</button>
                </div>`;

    card_container.insertAdjacentHTML("beforeend", card);
}

getCard(1);
getCard(2);
getCard(3);
