const passwordInput = document.querySelector('input[type="password"]');
const toggleIcon = document.querySelector('section:nth-of-type(2) div svg:last-of-type');
const button = document.querySelector('button');

// Use consistent viewBox
toggleIcon.setAttribute("viewBox", "0 0 24 24");

const eyeOpenPath = `
  <path d="M12 4.5C7.30558 4.5 3.13814 7.44544 1.5 12C3.13814 16.5546 7.30558 19.5 12 19.5C16.6944 19.5 20.8619 16.5546 22.5 12C20.8619 7.44544 16.6944 4.5 12 4.5ZM12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"/>
`;

const eyeClosedPath = `
  <path d="M12 6.5c-2.5 0-4.8 1-6.6 2.6l-1.9-1.9L2 8.5l2.1 2.1C3.5 11.7 3 12.8 3 14c0 4.1 4 7.5 9 7.5 2.5 0 4.8-1 6.6-2.6l1.9 1.9 1.4-1.4-2.1-2.1c.6-1.1 1.1-2.2 1.1-3.4 0-4.1-4-7.5-9-7.5zM12 19c-3.3 0-6-2.2-6-5 0-.9.3-1.7.8-2.4l1.5 1.5c-.1.3-.1.6-.1.9 0 1.7 1.3 3 3 3 .3 0 .6 0 .9-.1l1.5 1.5c-.7.5-1.5.8-2.4.8zm6-5c0 .6-.1 1.2-.3 1.7l-1.4-1.4c.1-.3.1-.6.1-.9 0-1.7-1.3-3-3-3-.3 0-.6 0-.9.1L9.9 9.9c.7-.5 1.5-.8 2.4-.8 3.3 0 6 2.2 6 5z"/>
`;

function revealPassword() {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    toggleIcon.innerHTML = isHidden ? eyeOpenPath : eyeClosedPath;
}

function passwordValidation() {
    const password = passwordInput.value.trim();

    if (password === "") {
        passwordInput.style.border = "2px solid red";
    } else {
        passwordInput.style.border = "";
    }
}

// 🆕 Clear red border on focus
passwordInput.addEventListener('focus', () => {
    passwordInput.style.border = "";
});

toggleIcon.addEventListener('click', revealPassword);
button.addEventListener('click', passwordValidation);
