// Get the current page's path
let currentPage = window.location.pathname;

// Get all navigation links (anchor elements)
let navLinks = document.querySelectorAll('nav ul li a');

// Loop through each link and add the 'active' class to the matching one
navLinks.forEach(link => {
    // Compare the current path with the link's text (you can adjust this to match your actual URLs)
    if (link.textContent.toLowerCase() === currentPage.replace("/", "").toLowerCase()) {
        link.classList.add('active');
    }
});
