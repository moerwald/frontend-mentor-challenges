
var ratingIcons = document.getElementsByClassName("rating-option");
var button = document.getElementsByTagName("button")[0];
var currentRating = undefined;

button.addEventListener("click", (event) => {
    console.log("CLICKED");
    console.log(event);
});

for (var i of ratingIcons) {
    i.addEventListener("click", (event) => {


        var ratingElement = event.target;
        const ratingClickedClass = "rating-clicked";

        let foundElements = Array.from(ratingIcons).filter(ri => ri.classList.contains(ratingClickedClass));
        if (foundElements.length > 0){
            foundElements.forEach(e => e.classList.remove(ratingClickedClass));
        }

        ratingElement.classList.add(ratingClickedClass);
        currentRating = ratingClickedClass.innerText;

    });
}