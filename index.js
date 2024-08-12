function sendMail(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };
    
    const serviceId = 'service_igu2rp5';
    const templateId = 'template_3uw1cqu';
   
    emailjs.send(serviceId, templateId, params)
    .then(res => {
        // Clear the form fields after successful submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = ''; 
        console.log(res);
        alert('Your message was sent successfully');
    }) 
    .catch(err => {
        console.log(err);
        alert('There was an error sending your message. Please try again later.');
    });
};

// ========================================= menu button   ========================================


//     const menuBtn = document.getElementById('menu-btn');
// const menu = document.getElementById('menu');

// menuBtn.addEventListener('click',() => {
//     menu.classList.toggle('hidden');
// });


function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  }


// =============================== animaiton ========================================

AOS.init({
    duration: 2000, // duration of animation in milliseconds
    once: true, // animation should happen only once - while scrolling down
});
