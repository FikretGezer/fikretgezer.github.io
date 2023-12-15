function changeImages() {
    const mainImage = document.querySelector('.main-image');
    const sideImages = document.querySelectorAll('.actual-side-image');

    mainImage.src = sideImages[0].src;

    sideImages.forEach(sideImage => {
        sideImage.addEventListener('click', () => {
            const src = mainImage.src;
            console.log('deneme');
            mainImage.src = sideImage.src;
        });
    });
}