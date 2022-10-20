
const button = document.getElementById("share-button");

button.addEventListener("click", () => {
    const section = document.getElementById("social-media-banner");
    const socialMediaHidden = "social-media-hidden";
    const socialMediaShowed = "social-media-show";

    const hiddenClassSet = section.classList.contains(socialMediaHidden);
    section.classList.remove(hiddenClassSet ? socialMediaHidden : socialMediaShowed);
    section.classList.add(hiddenClassSet ? socialMediaShowed : socialMediaHidden);

    if (hiddenClassSet) {
        section.appendChild(button);
        return;
    }

    const footer = document.getElementsByTagName("footer")[0];
    footer.appendChild(button);
});


