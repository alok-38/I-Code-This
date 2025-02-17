// Select elements
const mainContainer = document.querySelector('main');
const closeBtn = document.getElementById('close-btn');
const reopenBtn = document.getElementById('open-container-btn');
const addUserCard = document.querySelector('.add-user');  // Select the "Add user" card
const modalWrapper = document.getElementById('modal-wrapper');
const closeModalBtn = document.createElement('button'); // Create a close button for the modal
const addUserBtn = document.getElementById('add-user-btn');
const newUserNameInput = document.getElementById('new-username-input');
const newImgInput = document.getElementById('new-img-input');
const userList = document.getElementById('users-list');
const manageUsersBtn = document.getElementById('manage-users-btn');


// Add event listener for the close button (hides the main container)
closeBtn.addEventListener('click', function () {
    mainContainer.style.display = 'none';  // Hide the container
    reopenBtn.style.display = 'block';  // Show the reopen button
});

// Add event listener for the reopen button (shows the main container again)
reopenBtn.addEventListener('click', function () {
    mainContainer.style.display = 'block';  // Show the container
    reopenBtn.style.display = 'none';  // Hide the reopen button
});

// Add event listener for the "Add user" card (opens the modal)
addUserCard.addEventListener('click', function () {
    modalWrapper.classList.remove('hidden');  // Show the modal
});

// Create the close button for the modal and append it to the modal
closeModalBtn.textContent = "Close";
closeModalBtn.classList.add('close-modal-btn'); // You can style it as needed
modalWrapper.appendChild(closeModalBtn);

// Add event listener to close the modal when clicking outside the modal content
modalWrapper.addEventListener('click', function (event) {
    // Check if the click happened outside the modal content (div with class 'modal')
    if (!event.target.closest('.modal')) {
        modalWrapper.classList.add('hidden');  // Close the modal
    }
});

// Add event listener for the "Close" button in the modal (to close the modal directly)
closeModalBtn.addEventListener('click', function () {
    modalWrapper.classList.add('hidden');  // Close the modal
});

// Add event listener to handle adding the new user when the "Add user" button is clicked
addUserBtn.addEventListener('click', function () {
    const newUsername = newUserNameInput.value;
    const newUserImg = newImgInput.value;

    // Validate the inputs
    if (newUsername && newUserImg) {
        // Create new user item
        const newUserItem = document.createElement('li');
        newUserItem.classList.add('user-item');

        const userImage = document.createElement('img');
        userImage.src = newUserImg;
        userImage.alt = `${newUsername} profile image`;

        const userName = document.createElement('p');
        userName.textContent = newUsername;

        // Append the image and username to the new user item
        newUserItem.appendChild(userImage);
        newUserItem.appendChild(userName);
        userList.appendChild(newUserItem);

        // Close the modal after adding the user
        modalWrapper.classList.add('hidden');

        // Clear input fields
        newUserNameInput.value = '';
        newImgInput.value = '';
    } else {
        alert('Please provide both an image URL and a username!');
    }
});

// Add event listener for the "Manage users" button
manageUsersBtn.addEventListener('click', function () {
    // Add the jiggle animation to all user items
    const userItems = document.querySelectorAll('.user-item');

    userItems.forEach(function (userItem) {
        userItem.classList.add('jiggle-animation'); // Apply the jiggle animation class

        // Show the delete button in the top-right corner of each user card
        const deleteBtn = userItem.querySelector('.delete-btn');
        if (deleteBtn) {
            deleteBtn.style.display = 'block'; // Show the delete button if it exists
        } else {
            // If there's no delete button, create one and append it
            const newDeleteBtn = document.createElement('button');
            newDeleteBtn.classList.add('delete-btn');
            newDeleteBtn.textContent = 'X';
            newDeleteBtn.style.position = 'absolute';
            newDeleteBtn.style.top = '10px';
            newDeleteBtn.style.right = '10px';
            userItem.appendChild(newDeleteBtn);

            // Add event listener for the delete button
            newDeleteBtn.addEventListener('click', function () {
                userItem.remove(); // Remove the user item from the DOM
            });
        }
    });
});