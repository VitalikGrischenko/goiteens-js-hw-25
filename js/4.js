const listElement = document.getElementById('my-list');
const changeElementButton = document.getElementById('change-element-button');


changeElementButton.addEventListener('click', function() {

    const firstListItem = listElement.querySelector('li:first-child');
    
    firstListItem.textContent = 'tosha';
});