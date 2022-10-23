
const button = document.getElementById("share-button");

button.addEventListener("click", () => {
    const section = document.getElementById("social-media-banner");
    const socialMediaShowed = "social-media-show";
    const shareButtonIsActive = "share-button-activated";

    // Show/Hide social media banner
    section.classList.toggle(socialMediaShowed);
    button.classList.toggle(shareButtonIsActive);

});


