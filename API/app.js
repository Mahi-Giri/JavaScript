const url = "https://cat-fact.herokuapp.com/facts";

const para = document.querySelector('#para');
const btn = document.querySelector('.btn');

// Async-Await
const getFacts = async () => {
    console.log('Getting data...');
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    para.textContent = data[3].text;
}

btn.addEventListener('click', getFacts);