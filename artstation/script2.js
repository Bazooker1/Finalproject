let loadImages = fetch('pictures.json');

loadImages.then(response => {
    response.json().then(result => {
        Add(result.p1);
        Add(result.p2);
        Add(result.base64);
    });
});

function Add(url) {
    const img = new Image();
    img.src = url;
    document.querySelector('.picture').append(img);
}