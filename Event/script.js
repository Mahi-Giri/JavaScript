// const btn = document.querySelectorAll(".btns");
// const box = document.querySelector(".box");

// // Event
// btn[0].onclick = () => {
//     console.log('button was clicked');
//     alert('Hello');
// }

// btn[1].ondblclick = () => {
//     console.log('button was clicked');
//     alert('Double Click');
// }

// box.onmouseover = () => {
//     console.log('You are on Box');
// }

// // Event Object
// btn[0].onclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// }

// // Event Listeners
// // We can excute the multiple events in the same time.

// // addEventListener
// btn[0].addEventListener("click", (event) => {
//     console.log('button was clicked-1');
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// });

// // removeEventListener
// btn[0].addEventListener("click", () => {
//     console.log('button was clicked-1');
// });

// btn[0].addEventListener("click", () => {
//     console.log('button was clicked-2');
// });

// // For removing any EventListener for this we need to create a reference to the function
// // After creating reference then pass it to the event listener
// const removeFunction = () => {
//     console.log('button was clicked-3');
// }

// btn[0].addEventListener("click", removeFunction);
// btn[0].removeEventListener("click", removeFunction);

// btn[0].addEventListener("click", () => {
//     console.log('button was clicked-4');
// });


// Practice Question 1
// Create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again
const btn = document.querySelector(".btns");
const body = document.querySelector("body")
let currentMode = "Light";
btn.addEventListener("click", () => {
    if (currentMode === "Light") {
        currentMode = "Dark";
        // body.style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currentMode = "Light";
        // body.style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
});