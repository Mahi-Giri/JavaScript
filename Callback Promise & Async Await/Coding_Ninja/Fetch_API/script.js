const card_container = document.querySelector(".card-container");

function getCard(id) {
    fetch(`https://dummyjson.com/users/${id}`)
        .then((responce) => {
            if (!responce.ok) {
                throw new Error("Couldn't find user");
            }
            return responce.json();
        })
        .then((user) => {
            displayUser(user);
        })
        .catch((err) => {
            console.error(err);
        });
}

function displayUser(data) {
    const card = `<div class="user-card">
        <img src=${data.image} alt="Profile Image" />
        <h3 id="fname">${data.firstName}</h3>
        <h3 id="lname">${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
        </div>`;

    card_container.insertAdjacentHTML("beforeend", card);
}

getCard(1);
getCard(2);
getCard(3);
getCard(4);
getCard(5);
