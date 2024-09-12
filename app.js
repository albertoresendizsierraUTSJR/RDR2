const imagesSection = document.getElementById('images');

const data = {
    images: [
        'img/img1.png',
        'img/img2.png',
        'img/img3.png',
        'img/img4.png',
        'img/img5.png'
    ]
};

data.images.forEach((imgSrc) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Imagen de Red Dead Redemption 2';
    imagesSection.appendChild(img);
});
