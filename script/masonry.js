document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid'); // Select your Masonry container

    if (grid) {
        imagesLoaded(grid, function() {
            // Initialize Masonry after all images in the grid are loaded
            var msnry = new Masonry(grid, {
                itemSelector: '.grid-item', // Select your grid items
                percentPosition: true, // Optional: for responsive layouts
            });
        });
    }


});
