function hideElement() {
    var x = document.getElementsByClassName("references");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function changeButtonText() {
    var elem = document.getElementById("toggle");
    if (elem.innerText == "Show") elem.innerText = "Hide";
    else elem.innerText = "Show";
}
function hide() {
    hideElement();
    changeButtonText();
}