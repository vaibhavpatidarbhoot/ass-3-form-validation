$(document).ready(function () {
  $('#togglePassword').on('click', function () {
    const passwordField = $('#password');
    const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);
    $(this).text(type === 'password' ? 'Show' : 'Hide');
  });

  $('#validationForm').on('submit', function (e) {
    e.preventDefault();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const phone = $('#phone').val().trim();
    const password = $('#password').val().trim();
    const messageBox = $('#message');

    // Reset message box
    messageBox.removeClass('success error').hide();

    // Validate inputs
    if (!name || !email || !phone || !password) {
      showMessage('All fields are required.', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showMessage('Invalid email format.', 'error');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      showMessage('Phone number must be exactly 10 digits.', 'error');
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
      showMessage('Password must be at least 6 characters with uppercase, lowercase, and number.', 'error');
      return;
    }

    showMessage('Form submitted successfully!', 'success');
  });

  function showMessage(message, type) {
    const box = $('#message');
    box.text(message).removeClass('success error').addClass(type).show();
  }
});
