'use strict';

document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();

    const fullName = document.querySelector('#full-name').value;
    const email = document.querySelector('#email-address').value;
    const phone = document.querySelector('#phone').value;
    const contactMethod = document.querySelector('input[type=radio]:checked').value;
    const message = document.querySelector('#message').value;
    console.log(fullName, email, phone, contactMethod, message);

    let report = "Hello Oluwadamisi 👋\n\n"

    function appendToReport (condition, message) {
        if (condition) {
            report += `${message}\n\n`;
        }
    }

    appendToReport(fullName, `${fullName} is reaching out.`);
    appendToReport(!fullName, `You have a new contact.`);
    appendToReport(email, `You can get back to them at ${email}.`);
    appendToReport(!email, `The contact refused to leave their email address.`);
    appendToReport(phone, `Here is their phone contact in case you want to give them a call: ${phone}.`);
    appendToReport(contactMethod, `They'll prefer to be reached by ${contactMethod}.`);
    appendToReport(message, `Here is what they'll love to discuss with you: ${message}.`);

    console.log(report);

    emailjs.init({
        publicKey: "UI0iXS8Kvc-5R_yAd",
    });

    var templateParams = {
        name: fullName,
        message: report,
    };
      
    emailjs.send('service_5h2z0nf', 'template_o3i5tlc', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
})