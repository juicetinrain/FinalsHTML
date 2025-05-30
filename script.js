  // Toggle accordion answers
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    button.classList.toggle('active');
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
});
});