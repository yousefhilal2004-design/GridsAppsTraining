// Day 07: Only small demo-form behavior. Bootstrap controls the menu, modal and accordion.
'use strict';
function showDemoSuccess(form, notice) {
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    form.reportValidity();
    notice.classList.add('d-none');
    return;
  }
  form.classList.add('was-validated');
  notice.classList.remove('d-none');
}
const modalForm = document.getElementById('modalContactForm');
if (modalForm) {
  modalForm.addEventListener('submit', function(event) {
    event.preventDefault();
    showDemoSuccess(modalForm, document.getElementById('modalNotice'));
  });
  document.getElementById('contactModal').addEventListener('hidden.bs.modal', function(){
    modalForm.reset();
    modalForm.classList.remove('was-validated');
    document.getElementById('modalNotice').classList.add('d-none');
  });
}
const pageForm = document.getElementById('pageContactForm');
if (pageForm) {
  pageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    showDemoSuccess(pageForm, document.getElementById('pageNotice'));
  });
}
