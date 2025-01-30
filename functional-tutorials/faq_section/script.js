document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle plus and minus icons on details open/close
    const faqs = document.querySelectorAll('details');
    faqs.forEach(faq => {
        const summary = faq.querySelector('summary');
        const icon = summary.querySelector('.plus-icon');

        summary.addEventListener('click', () => {
            if (faq.hasAttribute('open')) {
                icon.setAttribute('d', 'M5 12l14 0'); // Plus icon path
            } else {
                icon.setAttribute('d', 'M12 5l0 14'); // Minus icon path
            }
        });
    });

    // Add 3 more FAQs dynamically
    const faqSection = document.getElementById('faq');
    const newFAQs = [
        { question: "How can I submit a challenge?", answer: "You can submit your solutions directly on the platform after completing each challenge." },
        { question: "Is there a time limit for each challenge?", answer: "No, there is no strict time limit, but we encourage you to solve challenges within a day." },
        { question: "Can I revisit previous challenges?", answer: "Yes, you can revisit and try previous challenges at any time." }
    ];

    newFAQs.forEach(faq => {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.innerHTML = faq.question;

        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('class', 'plus-icon');
        icon.setAttribute('width', '35');
        icon.setAttribute('height', '35');
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('stroke-width', '1.5');
        icon.setAttribute('stroke', 'currentColor');
        icon.setAttribute('fill', 'none');
        icon.setAttribute('stroke-linecap', 'round');
        icon.setAttribute('stroke-linejoin', 'round');
        icon.innerHTML = '<path stroke="none" d="M0 0h24v24H0z" fill="none" /><path class="vertical-line" d="M12 5l0 14" /><path d="M5 12l14 0" />';

        summary.appendChild(icon);
        const answer = document.createElement('p');
        answer.classList.add('answer');
        answer.innerText = faq.answer;

        details.appendChild(summary);
        details.appendChild(answer);
        faqSection.appendChild(details);
    });

    // Handle close button and toggle FAQ section
    const closeBtn = document.getElementById('close-btn');
    const openFAQBtn = document.createElement('button');
    openFAQBtn.innerText = 'Open FAQ';
    openFAQBtn.style.display = 'none'; // Initially hidden

    document.body.appendChild(openFAQBtn);

    closeBtn.addEventListener('click', () => {
        document.querySelector('main').style.display = 'none'; // Hide FAQ section
        openFAQBtn.style.display = 'block'; // Show Open FAQ button
    });

    openFAQBtn.addEventListener('click', () => {
        document.querySelector('main').style.display = 'block'; // Show FAQ section
        openFAQBtn.style.display = 'none'; // Hide Open FAQ button
    });
});
