const itemEl = document.getElementById('item');
const priceEl = document.getElementById('price');
const btnEl = document.querySelector('button');
const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const itemInput = itemEl.value;
    let priceInput = parseFloat(priceEl.value).toFixed(2);  // Format price with two decimals

    const liEl = document.createElement('li');
    liEl.textContent = `${itemInput} - $${priceInput}`;  // Display item and formatted price

    ulEl.appendChild(liEl);

    itemEl.value = "";  // Clear the input fields
    priceEl.value = "";
});
