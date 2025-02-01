const listItems = document.querySelectorAll('ul li');

// Hover effect - Add active class on hover
listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('active')
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('active');
    });
})

// Click effect - Toggle active class on click
listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all items first
        listItems.forEach(list => list.classList.remove('active'));
        // Add 'active' class to the clicked item
        item.classList.add('active');
    });
});

const ulEl = document.querySelector('ul');
const button = document.querySelector('button').addEventListener('click', () => {
    const newListItem = document.createElement('li');

    // Set the inner HTML for the new list item, adding a close button (cross mark)
    newListItem.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-browser">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
            <path d="M4 8l16 0" />
            <path d="M8 4l0 4" />
        </svg>
        New Item
        <span class="close-btn">X</span> <!-- Add a close button -->
    `;

    // Append the new list item to the ul element
    ulEl.appendChild(newListItem);

    // Add event listener to the close button (cross) to remove the list item
    const closeButton = newListItem.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
        newListItem.remove();  // Remove the list item when the close button (X) is clicked
    });
});
