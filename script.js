document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        autoHeight: true,
        breakpoints: {
            640: {
                perPage: 1,
            },
        }
    }).mount();
});