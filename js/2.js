
const imageElement = document.getElementById('change-image');
const changeImageButton = document.getElementById('change-image-bn');


changeImageButton.addEventListener('click', function() {
    imageElement.src = './imgs/hw-2.jpg';
});