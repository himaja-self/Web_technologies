// forgot.js
function checkEmail() {
    var email = document.getElementById('email').value.trim();
    var feedback = document.getElementById('forgot-feedback');
    feedback.style.display = 'none';
    var emails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');
    if (emails.indexOf(email) === -1) {
        feedback.innerHTML = 'This email address is not associated with any account.';
        feedback.style.display = 'block';
        return false;
    } else {
        feedback.innerHTML = 'A password reset link has been sent to your email.';
        feedback.style.display = 'block';
        return false;
    }
}
