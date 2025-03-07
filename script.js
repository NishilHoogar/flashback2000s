document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const images = document.querySelectorAll(".carousel img");

    function showSlide(i) {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    }

    window.prevSlide = function () {
        index = (index - 1 + images.length) % images.length;
        showSlide(index);
    };

    window.nextSlide = function () {
        index = (index + 1) % images.length;
        showSlide(index);
    };
});
