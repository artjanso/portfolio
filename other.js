/*
const fullname = document.getElementById('fullname'); 
const email = document.getElementById('email'); 
const message = document.getElementById('message'); 


fullname.addEventListener('paste', e => e.preventDefault());
email.addEventListener('paste', e => e.preventDefault());
message.addEventListener('paste', e => e.preventDefault());

$('#fullname').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z0-9 ]");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
});

$('#email').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z0-9@]");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
});

$('#message').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z0-9 ]");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
});
*/