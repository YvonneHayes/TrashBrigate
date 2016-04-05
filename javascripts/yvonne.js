var userInput = {};


//Event Listeners for Submit Button

SubmitButton.addEventListener("click", validateDonationFormName);
SubmitButton.addEventListener("click", validateDonationFormLocation);
// SubmitButton.addEventListener("submit", validateEmail);

// Function to validate the Name input in the DonationForm

function validateDonationFormName(e) {
    e.preventDefault();
    var userName = document.forms["DonationForm"]["fname"].value;
    if (userName == null || userName == "") {
        nameAlert.setAttribute('style', 'visibility:visible');
    } else {
      userInput.name = userName;
    }
    console.log(userInput);
}


// Function to validate the Location input in the DonationForm

function validateDonationFormLocation(e) {
    e.preventDefault();
    var userEmail = document.forms["DonationForm"]["flocation"].value;
    if (userEmail == null || userEmail == "") {
        locationAlert.setAttribute('style', 'visibility:visible');
    } else {
      userInput.name = userEmail;
    }
    console.log(userInput);
}

// Function to validate the E-Mail input in the DonationForm

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//Local Storage
