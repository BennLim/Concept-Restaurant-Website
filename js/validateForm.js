function validateForm() {
    var dateRegex = /^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$/;
    var timeRegex = /^([0-9]|1[2-9]|2[0-3]):[0-5][0-9]$/;
    var numberRegex = /\+65(6|8|9)\d{7}/g;
    var fName = document.querySelector("#fname");
    var lName = document.querySelector("#lname"); 
    var date = document.querySelector("#date");
    var time = document.querySelector("#time");
    var seats = document.querySelector("#seats");
    var phoneNumber = document.querySelector("#number");
    var invalidInputCount = 0;
    
    var errorMsg = fName.parentNode.querySelector(".error-message");
    if (fName.value.length < 3) { // validates that input is more than 2 characters
        if (errorMsg != null) {
            errorMsg.innerHTML = "Please enter a valid name.";
        } else {
            var html = "";
            html += "<div class=\"error-message text-danger\">";
            html += "Please enter a valid name.";
            html += "</div>";
            fName.insertAdjacentHTML("afterend", html);
        }
        invalidInputCount++;
    } else if (errorMsg != null) {
        errorMsg.innerHTML = "";
    }

    var errorMsg = lName.parentNode.querySelector(".error-message");
    if (lName.value.length < 2) { // validates that input is more than 1 character
        if (errorMsg != null) {
            errorMsg.innerHTML = "Please enter a valid last name.";
        } else {
            var html = "";
            html += "<div class=\"error-message text-danger\">";
            html += "Please enter a valid last name.";
            html += "</div>";
            lName.insertAdjacentHTML("afterend", html);
        }
        invalidInputCount++;
    } else if (errorMsg != null) {
        errorMsg.innerHTML = "";
    }

    var errorMsg = date.parentNode.querySelector(".error-message");
    if (dateRegex.test(date.value) == false) {

        if (errorMsg != null) { // validates if user has entered a valid date
            errorMsg.innerHTML = "Please enter a valid date.";
        } else {
            var html = "";
            html += "<div class=\"error-message text-danger\">";
            html += "Please enter a valid date.";
            html += "</div>";
            date.insertAdjacentHTML("afterend", html);
        }
        invalidInputCount++;
    } else if (errorMsg != null) {
        errorMsg.innerHTML = "";
    }

    var errorMsg = time.parentNode.querySelector(".error-message");
    if (timeRegex.test(time.value) == false) {

        if (errorMsg != null) { // validates if user enters a valid time
            errorMsg.innerHTML = "Please enter a valid time.";
        } else {
            var html = "";
            html += "<div class=\"error-message text-danger\">";
            html += "Please enter a valid time.";
            html += "</div>";
            time.insertAdjacentHTML("afterend", html);
        }
        invalidInputCount++;
    } else if (errorMsg != null) {
        errorMsg.innerHTML = "";
    }

    var errorMsg = seats.parentNode.querySelector(".error-message");
    if (seats.value > 12 || seats.value < 1) { // validates that no. of seats is between 1 and 12 inclusive 

        if (errorMsg != null) {
            errorMsg.innerHTML = "Please enter a number between 1 and 12.";
        } else {
            var html = "";
            html += "<div class=\"error-message text-danger\">";
            html += "Please enter a number between 1 and 12.";
            html += "</div>";
            seats.insertAdjacentHTML("afterend", html);
        }
        invalidInputCount++;
    } else if (errorMsg != null) {
        errorMsg.innerHTML = "";
    }

    var errorMsg = phoneNumber.parentNode.querySelector(".error-message");
    if (numberRegex.test(phoneNumber.value) == false) { // Validate that number entered is a valid Singapore number

        if (errorMsg != null) {
            errorMsg.innerHTML = "Please enter a valid phone number.";
        } else {
            var html = "";
            html += "<div class=\"error-message text-danger\">";
            html += "Please enter a valid phone number.";
            html += "</div>";
            phoneNumber.insertAdjacentHTML("afterend", html);
        }
        invalidInputCount++;
    } else if (errorMsg != null) {
        errorMsg.innerHTML = "";
    }

    if (invalidInputCount > 0) {
        return false;
    }

}