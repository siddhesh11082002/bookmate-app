const signupForm = document.getElementById('signupForm');
const signinForm = document.getElementById('signinForm');

const goToSigninLink = document.getElementById('goToSignin');
const goToSignupLink = document.getElementById('goToSignup');

goToSigninLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    signupForm.hidden = true;
    signinForm.hidden = false;
});

goToSignupLink.addEventListener('click', function(event) {
    event.preventDefault();
    signinForm.hidden = true;
    signupForm.hidden = false;
});

signupForm.addEventListener('submit', function(event) {
    const termsAccepted = document.getElementById('terms').checked; 
    if (!termsAccepted) {
        alert("You must accept the terms and conditions.");
        event.preventDefault();
    }
});

signinForm.addEventListener('submit', function(event) {

});