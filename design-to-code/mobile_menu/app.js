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