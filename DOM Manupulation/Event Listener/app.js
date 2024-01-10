const heading_1 = document.querySelector(`.heading-1`);
const heading_2 = document.querySelector(`.heading-2`);
const btn = document.querySelector(`.btn`);

// function clickHeading() {
//     console.log(`Heading clicked 1`);
// }

// // Type 1
// // We can Pass callbacks here
// heading_1.addEventListener('click', clickHeading);

// Type 2
// We can Pass actual actions here
heading_1.addEventListener(`click`, () => {
    console.log(`Heading clicked 2`);
});

btn.addEventListener(`click`, () => {
    heading_2.innerText = ``;
});

// Event handlers
heading_1.addEventListener(`mousedown`, () => {
    heading_1.style.backgroundColor = `black`;
    heading_1.style.color = `white`;
});
heading_1.addEventListener(`mouseup`, () => {
    heading_1.style.backgroundColor = "";
    heading_1.style.color = "";
});

document.body.addEventListener(`keydown`, (event) => {
    console.log(`Key pressed`);
    console.log(event.key);
});