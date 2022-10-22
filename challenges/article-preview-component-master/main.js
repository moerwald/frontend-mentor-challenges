
const button = document.getElementById("share-button");

button.addEventListener("click", () => {
    const section = document.getElementById("social-media-banner");
    const socialMediaHidden = "social-media-hidden";
    const socialMediaShowed = "social-media-show";
    const shareButtonIsActive = "share-button-activated";

    const updateShareButtonColors = function updateShareBtnColors(btn){
        // Update button colors
        if (btn.classList.contains(shareButtonIsActive)) {
            btn.classList.remove(shareButtonIsActive);
            return;
        }
        btn.classList.add(shareButtonIsActive);
    };

    // Show/Hide social media banner
    const hiddenClassSet = section.classList.contains(socialMediaHidden);
    section.classList.remove(hiddenClassSet ? socialMediaHidden : socialMediaShowed);
    section.classList.add(hiddenClassSet ? socialMediaShowed : socialMediaHidden);

    updateShareButtonColors(button);
});


