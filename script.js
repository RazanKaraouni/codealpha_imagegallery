const images = [
    "Image1.jpeg",
    "Image2.jpeg",
    "Image3.jpeg",
    "Image4.jpeg",
    "Image5.jpeg",
    "images7.jpeg",
    "images8.jpeg",
    "images9.jpeg",
    "images10.jpeg",
    "images11.jpeg",
    "images12.jpeg"
];

let currentIndex = 0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex];
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    lightboxImg.src = images[currentIndex];
}


lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});
