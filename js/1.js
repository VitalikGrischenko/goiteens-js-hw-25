const textField = document.getElementById('text-field');
const changeButton = document.getElementById('changebn');

changeButton.addEventListener('click', function() {

    const newText = textField.value;

    changeButton.textContent = newText;
});