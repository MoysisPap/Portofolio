$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


function decodeEmail(encodedString) {
    return atob(encodedString);
  }
  
  function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var decodedEmail = decodeEmail(document.getElementById("encoded_email").value);
    
    // Construct email link with subject and body
    var subject = "Message from " + name;
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    var emailLink = "mailto:" + encodeURIComponent(decodedEmail) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    
    // Open email client with pre-filled email
    window.location.href = emailLink;
  }