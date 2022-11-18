

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var regexpMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    var regexppwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    if (email == '') {
        alert('Please enter your user name or email id');
        return false;
    }
    else if (!regexpMail.test(email)) {
        alert('Invalid email');
        return false;
    }
    else if (password == '') {
        alert('Please enter Password');
        return false;
    }
    else if (!regexppwd.test(password)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        return false;
    }
    else if (document.getElementById("password").value.length <= 8) {
        alert('Password minimum length is 8');
        return false;
    }
    else if (document.getElementById("password").value.length > 12) {
        alert('Password max length is 12');

        return false;
    }
    else {
        alert('Thank You for Login');
        return true;

    }
}
