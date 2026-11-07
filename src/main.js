// written by Raheil Bryce

const repoButton = document.getElementById("repo-button");

if (repoButton) {
    repoButton.addEventListener("click", () => {
        window.open("https://github.com/SEG-2900-Team-19-uoDate-prototype/uoDate", "_blank");
    });
}

const tryMeButton = document.getElementById("demo-button");

if (tryMeButton) {
    tryMeButton.addEventListener("click", () => {
        window.alert("Sorry! We're still working on the demo. Please check back later!");
    });
}

const carouselTrack = document.getElementById("carousel-track");
const previousButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

if (carouselTrack && previousButton && nextButton) {
    function scrollOneCard(direction) {
        carouselTrack.scrollBy({
            left: direction * carouselTrack.clientWidth,
            behavior: "smooth"
        });
    }

    previousButton.addEventListener("click", () => {
        scrollOneCard(-1);
    });

    nextButton.addEventListener("click", () => {
        scrollOneCard(1);
    });
}