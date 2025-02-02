const bellBtn = document.getElementById('bell-btn');
const notificationContainer = document.getElementById('notifications-wrapper');
const markAsReadBtn = document.getElementById('mark-as-read-btn');
const notificationsList = document.getElementById('notifications-list');
const displayMessage = document.getElementById('notifications-read-msg');
const acceptBtns = document.querySelectorAll('.accept-btn');
const declineBtns = document.querySelectorAll('.decline-btn');

bellBtn.addEventListener('click', function () {
    // Toggle the visibility of the notification container
    if (notificationContainer.style.display === 'none') {
        notificationContainer.style.display = 'block';
    } else {
        notificationContainer.style.display = 'none';
    }
});

markAsReadBtn.addEventListener('click', function () {
    // If the button says "Mark all as read", hide the notifications list and show the "Mark as read" message
    if (markAsReadBtn.textContent === "Mark all as read") {
        notificationsList.innerHTML = '';  // Remove all notifications
        displayMessage.classList.remove('hidden');  // Show the "All notifications have been read" message
        markAsReadBtn.textContent = "Read all notifications";  // Change button text to "Read all notifications"
    } else {
        // If the button says "Read all notifications", bring back the notifications list
        displayMessage.classList.add('hidden');  // Hide the "All notifications have been read" message
        notificationsList.innerHTML = `
            <li class="notification-item">
                <div class="user-img-wrapper">
                    <img src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt="user profile picture">
                </div>
                <div>
                    <p><strong>Paul Waga</strong> shared the file <strong>Android UI Kit</strong> with you.</p>
                    <small class="notification-time">An hour ago</small>
                    <div class="notification-item-btns">
                        <button class="decline-btn">Decline</button>
                        <button class="accept-btn">Accept</button>
                    </div>
                </div>
            </li>
            <li class="notification-item">
                <div class="user-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1524290266577-e90173d9072a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt="user profile picture">
                </div>
                <div>
                    <p><strong>Denise Selover</strong> made you an editor in the team <strong>Power</strong>.</p>
                    <small class="notification-time">Yesterday</small>
                </div>
            </li>
        `;
        markAsReadBtn.textContent = "Mark all as read";  // Change button text back to "Mark all as read"
    }
});



acceptBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // Hide both buttons and show "Accepted" message
        const notificationItem = btn.closest('.notification-item');
        const btnsWrapper = notificationItem.querySelector('.notification-item-btns');
        btnsWrapper.style.display = 'none';

        const acceptedMessage = document.createElement('p');
        acceptedMessage.textContent = 'The notification has been accepted';
        notificationItem.appendChild(acceptedMessage);
    });
});

declineBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // Hide both buttons and show "Declined" message
        const notificationItem = btn.closest('.notification-item');
        const btnsWrapper = notificationItem.querySelector('.notification-item-btns');
        btnsWrapper.style.display = 'none';

        const declinedMessage = document.createElement('p');
        declinedMessage.textContent = 'The notification has been declined';
        notificationItem.appendChild(declinedMessage);
    });
});
