const btn = document.querySelector("button");
function changeBackgroundColor(selector) {
    const element = document.querySelectorAll(selector);
    for (const key of element) {
        key.style.backgroundColor = "yellow";
        key.style.color = "black";
    }
}

btn.addEventListener("click", function () {
    changeBackgroundColor(".my-class");
    changeBackgroundColor("#my-id");
    changeBackgroundColor("button");
});