"use strict";
// The forms are a browser-only training demo. No data is sent or stored.
document.querySelectorAll('form[data-demo-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.classList.add('was-validated');
    if (!form.checkValidity()) return;
    const status = form.querySelector('[role="status"]');
    if (status) status.textContent = 'Form checked successfully! This is a demo, so nothing was sent.';
    form.reset();
    form.classList.remove('was-validated');
  });
});
