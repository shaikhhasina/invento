// Invento ProSkill – NDT Course Landing Page
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('reserveForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Thank you! We will contact you ✓';
    // TODO: send form data to your CRM, Google Sheet, or email endpoint here.
  });
});
