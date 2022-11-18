function registration() {

    var name = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpwd = document.getElementById("cmpassword").value;

    //email id expression code
    var password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == '') {
        alert('Please enter your name');
        return false;
    }
    else if (!letters.test(name)) {
        alert('Name field required only alphabet characters');
        return false;
    }
    else if (email == '') {
        alert('Please enter your user email id');
        return false;
    }
    else if (!filter.test(email)) {
        alert('Invalid email');
        return false;
    }
    else if (password == '') {
        alert('Please enter Password');
        return false;
    }
    else if (cpwd == '') {
        alert('Enter Confirm Password');
        return false;
    }
    else if (!password_expression.test(password)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        return false;
    }
    else if (password != cpwd) {
        alert('Password not Matched');
        return false;
    }
    else if (document.getElementById("cmpassword").value.length <= 8) {
        alert('Password minimum length is 6');
        return false;
    }
    else if (document.getElementById("cmpassword").value.length > 12) {
        alert('Password max length is 12');
        return false;
    }
    else {
        alert('Thank You for Registration!');
        return true;

    }
}

