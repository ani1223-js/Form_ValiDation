function validateForm() {
    let isValid = true;

    // Clear any previous errors
    clearMessages();

    // Full Name Validation
    let name = document.getElementById("name").value.trim();
    if (name.length < 5) {
        showError("name", "Name must be at least 5 characters long");
        isValid = false;
    } else {
        showSuccess("name");
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    if (!email.includes("@")) {
        showError("email", "Enter a valid email address");
        isValid = false;
    } else {
        showSuccess("email");
    }

    // Phone Number Validation
    let phone = document.getElementById("phone").value.trim();
    if (phone === "123456789" || phone.length !== 10) {
        showError("phone", "Enter a valid 10-digit phone number");
        isValid = false;
    } else {
        showSuccess("phone");
    }

    // Password Validation
    let password = document.getElementById("password").value.trim();
    let nameValue = document.getElementById("name").value;
    if (password === "password" || password === nameValue || password == 1234567890 || password.length < 8) {
        showError("password", "Password must be at least 8 characters and cannot be 'password' or your name");
        isValid = false;
    } else {
        showSuccess("password");
    }

    // ConfirmPassword Validation
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    if (password !== confirmPassword || confirmPassword == "") {
        showError("confirmPassword", "Passwords do not match");
        isValid = false;
    } else {
        showSuccess("confirmPassword");
    }

    if (isValid) {
        Swal.fire({
            title: 'Congratulations!',
            text: name + ', your registration is successful!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload(); // Refresh the page after clicking "OK"
            }
        });
        return false; // Prevent form submission (remove this line if you want to submit the form)
    }
    return false; // Prevent form submission if validation fails
}                   


function showError(field, message) {
    document.getElementById(field + "Error").innerHTML = message;
    document.getElementById(field).classList.add("input-error");
    document.getElementById(field + "error").style.visibility = "visible";
}

function showSuccess(field) {
    document.getElementById(field + "Error").innerHTML = "";
    document.getElementById(field).classList.remove("input-error");
    document.getElementById(field).classList.add("input-success");
    document.getElementById(field + "Success").style.visibility = "visible";
}

function clearMessages() {
    const fields = ["name", "email", "phone", "password", "confirmPassword"];
    fields.forEach(function (field) {
        document.getElementById(field + "Error").innerHTML = "";
        document.getElementById(field + "Success").style.visibility = "hidden";
        document.getElementById(field + "error").style.visibility = "hidden";

        document.getElementById(field).classList.remove("input-error", "input-success");
    });
}
