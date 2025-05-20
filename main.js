const button = document.getElementById("share-button")
const shareCard = document.getElementById("share")
const svg = document.getElementById("svg")
let shareStatus = false
console.log(svg)
console.log(shareCard)
console.log(button);
console.log("hai")


button.addEventListener("click", function () {
    if (shareStatus === false) {
        console.log(shareStatus)
        button.classList.remove("nonactive")
        button.classList.add("active")
        shareCard.classList.remove("disable")
        svg.style.fill = "hsl(210, 46%, 95%)"
        shareStatus = true
    }
    else {
        console.log(shareStatus)
        button.classList.add("nonactive")
        button.classList.remove("active")
        shareCard.classList.add("disable")
        svg.style.fill = "hsl(217, 19%, 35%)"
        shareStatus = false
    }
})