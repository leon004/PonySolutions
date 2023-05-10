const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_cfbqipd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('El pago se ha enviado correctamente');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});