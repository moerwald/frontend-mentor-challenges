"use strict";


var ratingIcons = document.getElementsByClassName("rating-option");
var button = document.getElementsByTagName("button")[0];
var currentRating = "empty";
button.disabled = true;

console.log(currentRating);

button.addEventListener("click", (event) => {
    console.log(currentRating);

    var ratingSection = document.getElementsByClassName("rating_section")[0];
    var thankYouSection = document.getElementsByClassName("thank_you_section")[0];
    var chosenRating = document.getElementById("chosen_rating");

    ratingSection.classList.add("display-no");
    thankYouSection.classList.remove("display-no");
    chosenRating.innerText = currentRating;
});

for (var i of ratingIcons) {
    i.addEventListener("click", (event) => {

        var ratingElement = event.target;
        const ratingClickedClass = "rating-clicked";

        let foundElements = Array.from(ratingIcons).filter(ri => ri.classList.contains(ratingClickedClass));
        if (foundElements.length > 0) {
            foundElements.forEach(e => e.classList.remove(ratingClickedClass));
        }

        ratingElement.classList.add(ratingClickedClass);

        currentRating = ratingElement.innerText;
        button.disabled = false;

        console.log(currentRating);

    });
}