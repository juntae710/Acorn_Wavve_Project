let i = true;
function toggle() {
    let contentE = document.getElementById("content");
    if (i == true) {
        contentE.style.display = "block";
        i = false;
    } else {
        contentE.style.display = "none";
        i = true;
    }
}