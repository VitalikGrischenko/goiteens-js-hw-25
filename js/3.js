const linkElement = document.getElementById('my-link');
const imageElement = document.getElementById('my-image');
const changeAttributesButton = document.getElementById('change-attributes-button');

changeAttributesButton.addEventListener('click', function() {
    linkElement.href = 'https://github.com/VitalikGrischenko/goiteens-js-hw-25';

    imageElement.alt = 'my githab';
});