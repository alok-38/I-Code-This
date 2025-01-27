const billAmount = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('tip-percentage');
const calculateBtn = document.getElementById('calculate-tip-btn');
const displayTip = document.getElementById('tip-amount');
const displayTotal = document.getElementById('total-amount');

function calculateTip() {
    const bill = billAmount.value;
    const rate = tipPercentage.value;
    const totalAmount = bill * rate;
    displayTip.textContent = rate;
    displayTotal.textContent = totalAmount;
    billAmount.value = "";
    tipPercentage.value = "";
}

calculateBtn.addEventListener('click', calculateTip);