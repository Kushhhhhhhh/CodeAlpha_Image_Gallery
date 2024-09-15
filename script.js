let currentIndex = 0;
const itemsPerPage = 4; 
const gallery = document.querySelector('.gallery');
const totalItems = gallery.children.length;

// Function to slide images one by one
function slide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - itemsPerPage; 
    } else if (currentIndex >= totalItems - itemsPerPage + 1) {
        currentIndex = 0;
    }

    // Calculate the offset to translate the gallery
    const offset = currentIndex * 100 / itemsPerPage;
    gallery.style.transform = `translateX(-${offset}%)`;
}