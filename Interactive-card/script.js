const form  = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

/**
 * Marks a specific input field as invalid and shows the corresponding error message.
 * @param {number} index - The index of the field to show the error for.
 */
function setError(index){
    campos[index].style.border = '2px solid #e63636';
    if (spans[index] !== undefined) {
        spans[index].style.display = 'block';
    }
}

/**
 * Removes the error indication and hides the error message for a specific input field.
 * @param {number} index - The index of the field to clear the error for.
 */
function removeError(index){
    campos[index].style.border = '1px solid hsl(270, 3%, 87%)'; 
    if (spans[index]) {
        spans[index].style.display = 'none';
    }
}

/**
 * Checks if the card number contains only digits.
 * Displays an error message if any character is not a number.
 */
function allNumber() {
    let v = campos[1].value.replace(/\s/g, ""); // Removes spaces

    for (let i = 0; i < v.length; i++) {
        if (isNaN(v[i])) { 
            setError(1);
            spans[1].innerText = 'Wrong format, numbers only';
            return; 
        }
    }

    removeError(1);
    console.log('Number is valid');
}

/**
 * Validates if the month field has exactly two digits.
 */
function sizeMonth(){
    if (campos[2].value.length < 2){
        setError(2);
        spans[2].innerText = "Can't be blank";
    } else {
        removeError(2);
        console.log('Month date is valid');
    }
}

/**
 * Validates if the year field has exactly two digits.
 */
function sizeYear(){
    if (campos[3].value.length < 2){
        setError(3);
        spans[3].innerText = "Can't be blank";
    } else {
        removeError(3);
        console.log('Year date is valid');
    }
}

/**
 * Validates if the CVC field has exactly three digits.
 */
function sizeCVC(){
    if (campos[4].value.length < 3){
        setError(4);
        spans[4].innerText = "Can't be blank";
    } else {
        removeError(4);
        console.log('CVC is valid');
    }
}

/**
 * Runs all validation functions and determines whether the form is valid.
 * @returns {boolean} - Returns true if all fields are valid, false otherwise.
 */
function validarFormulario() {
    let valido = true;

    allNumber();
    sizeMonth();
    sizeYear();
    sizeCVC();

    // Checks if any error message is still visible
    spans.forEach(span => {
        if (span.style.display === "block") {
            valido = false; 
        }
    });

    // Checks if any required field is empty
    campos.forEach(campo => {
        if (campo.value.trim() === "") {
            valido = false;
        }
    });

    return valido;
}

// Handles the form submission event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (window.innerWidth <= 785) {
        if (validarFormulario()) {
            document.getElementById("form").style.display = "none";
            document.getElementById("thanks-container").style.display = "block";
        } else {
            alert("Please, correct the errors before continuing.");
        }
    } else {
        console.log("On desktop: only standard validation, no screen changes.");
    }
});


// ===== REAL-TIME DISPLAY OF INPUT VALUES =====

const inputName = document.getElementById("cardholder");
const inputNumber = document.getElementById("card-number");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const inputCVC = document.getElementById("cvc");

const displayName = document.querySelectorAll(".cardHolder-display");
const displayNumber = document.querySelectorAll(".cardNumber-display");
const displayMonth = document.querySelectorAll(".month-display");
const displayYear = document.querySelectorAll(".year-display");
const displayCVC = document.querySelectorAll(".cvc-display");

/**
 * Updates all cardholder name display fields in real time.
 */
inputName.addEventListener("input", () => {
    displayName.forEach(el => {
        el.textContent = inputName.value || "JANE APLESEED"; 
    });
});

/**
 * Updates all card number display fields in real time.
 */
inputNumber.addEventListener("input", () => {
    displayNumber.forEach(el => {
        el.textContent = inputNumber.value || "0000 0000 0000 0000";
    });
});

/**
 * Updates all month display fields in real time.
 */
inputMonth.addEventListener("input", () => {
    displayMonth.forEach(el => {
        el.textContent = inputMonth.value || "00";
    });
});

/**
 * Updates all year display fields in real time.
 */
inputYear.addEventListener("input", () => {
    displayYear.forEach(el => {
        el.textContent = inputYear.value || "00";
    });
});

/**
 * Updates all CVC display fields in real time.
 */
inputCVC.addEventListener("input", () => {
    displayCVC.forEach(el => {
        el.textContent = inputCVC.value || "000";
    });
});
