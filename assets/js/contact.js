$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "what's your name, please?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "what's the subject of your form, please?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, please?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "what's your message, please?",
                }
            }
        })
    })
        
 })(jQuery)
})

/********** EMAIL JS******/
const ctcForm = document.getElementById("contactForm"),
       contactMessage = document.getElementById("contact-message")

       const sendEmail = (e) => {
            e.preventDefault()

            emailjs.sendForm('service_ky3wzg9', 'template_3jpy3k6', '#contactForm', 'qcU1XA-4BSDFb3mcO').then(() => {
                //show Message
                contactMessage.textContent = 'Message sent successfully ✅';
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)

                ctcForm.reset();
            }, () => {
                contactMessage.textContent = 'Message not sent (service error) ❌';
            })
       }
       ctcForm.addEventListener('submit', sendEmail)