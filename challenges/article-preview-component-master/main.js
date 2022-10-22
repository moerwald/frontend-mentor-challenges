
const button = document.getElementById("share-button");

button.addEventListener("click", () => {
    const section = document.getElementById("social-media-banner");
    const socialMediaHidden = "social-media-hidden";
    const socialMediaShowed = "social-media-show";
    const shareButtonIsActive = "share-button-activated";

    const updateShareButtonColors = function updateShareBtnColors(btn){
        const iconOfShareButton = document.getElementById("share-button-icon");
        if (iconOfShareButton.classList.contains(shareButtonIsActive)) {
            iconOfShareButton.classList.remove(shareButtonIsActive);
            btn.classList.remove(shareButtonIsActive);
            return;
        }
        iconOfShareButton.classList.add(shareButtonIsActive);
        btn.classList.add(shareButtonIsActive);
    };

    const hiddenClassSet = section.classList.contains(socialMediaHidden);
    section.classList.remove(hiddenClassSet ? socialMediaHidden : socialMediaShowed);
    section.classList.add(hiddenClassSet ? socialMediaShowed : socialMediaHidden);

    updateShareButtonColors(button);
});


