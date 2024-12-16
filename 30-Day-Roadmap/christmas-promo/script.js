const paraEl = document.getElementById('surprise');

const surpriseGift = () => {
    paraEl.textContent = "Expecting a gift? ShutUp and work.";
    paraEl.style.color = "orange";
}

const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', surpriseGift);