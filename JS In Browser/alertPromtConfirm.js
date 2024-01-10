alert("Enter your contact no");
let a = prompt("Enter hear");
a = Number.parseInt(a);
let write = confirm("Do you want write it on your page");
if (write) {
    document.write(a);
} else {
    document.write("Please allow me to write")
}