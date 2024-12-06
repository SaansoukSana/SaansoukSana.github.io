
const checkData = () => {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const jobDescription = document.getElementById('description').value;


    //Checks first name, last name, email, phone number, and description and throws error message if invalid

    if (jobDescription == "" || jobDescription == null || isNaN(jobDescription) == false) {
        document.getElementById('description').select();
        document.getElementById('description').focus();
        document.getElementById('description-error').style.display = 'block';
    }

    const phoneRegex = RegExp(/^\d{10}$/)

    if (!phoneRegex.test(phone)) {
        document.getElementById('phone').select();
        document.getElementById('phone').focus();
        document.getElementById('phone-error').style.display = 'block';
    }

    const emailRegex = RegExp(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/);

    if (!emailRegex.test(email)) {
        document.getElementById('email').select();
        document.getElementById('email').focus();
        document.getElementById('email-error').style.display = 'block';
    }

    if (firstName == "" || firstName == null || isNaN(firstName) == false) {
        document.getElementById('lname').select();
        document.getElementById('fname').focus();
        document.getElementById('fname-error').style.display = 'block';
    }

    if (lastName == "" || lastName == null || isNaN(lastName) == false) {
        document.getElementById('lname').select();
        document.getElementById('lname').focus();
        document.getElementById('lname-error').style.display = 'block';
    }


    // Checks for errors
    const errors = document.getElementsByClassName('error');
    for (let i = 0; i < errors.length; i++) {
        if (errors[i].style.display === 'block') {
            return true;
        }
    }

    return false;
}

const hideAllErrors = () => {
    const errorFields = document.getElementsByClassName('error');
    for (let i = 0; i < errorFields.length; i++) {
        errorFields[i].style.display = 'none';
    }
}

const resetFields = (e) => {
    if (confirm('Clear form?')) {
        hideAllErrors();
    }

    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('description').value = "";
}

const formValidation = (e) => {
    //Hide all errors elements on the page
    hideAllErrors();

    // Determine if the form has errors
    if (checkData()) {
        e.preventDefault();
    }

    return true;

}

const load = () => {
    document.getElementById('contact-form').addEventListener('submit', formValidation);
    hideAllErrors();

    document.getElementById('submit').addEventListener('click', function(){formValidation('submit')});
    document.getElementById('reset').addEventListener('click', function(){resetFields('reset');});
}

// Add document load event listener
document.addEventListener('DOMContentLoaded', load);