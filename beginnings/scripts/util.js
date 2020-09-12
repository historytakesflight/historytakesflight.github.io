function hideElement() {
    var x = document.getElementsByClassName("references");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
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