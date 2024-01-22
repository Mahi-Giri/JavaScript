const card_container = document.querySelector(".card-container");

function getCard(id) {
    fetch(`https://dummyjson.com/users/${id}`)
        .then((responce) => {
            return responce.json();
        })
        .then((user) => {
            console.log(user);
        });
}

getCard(1);