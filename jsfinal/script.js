let buttons = document.querySelectorAll(".roll-btn");
let inputs = document.querySelectorAll(".digit-box");

let intervals = [];
let triesLeft = Array(buttons.length).fill(5);

buttons.forEach(function(button, index) {
    let input = inputs[index];

    button.addEventListener("mousedown", function() {
        if (triesLeft[index] <= 0) {
            return;
        }

        button.style.backgroundColor = "red"; // Turn red when pressed

        let currentNum = 0; // Start at 0
        intervals[index] = setInterval(function() {
            input.value = currentNum;
            currentNum++;

            if (currentNum > 9) {
                currentNum = 0;
            }
        }, 80); // Faster flash speed
    });

    button.addEventListener("mouseup", function() {
        if (triesLeft[index] <= 0) {
            return;
        }

        clearInterval(intervals[index]);

        button.style.backgroundColor = "green"; // Back to green when released
        triesLeft[index] -= 1;
        button.textContent = triesLeft[index];

        if (triesLeft[index] <= 0) {
            alert("You ran out of tries! Reloading the page...");
            location.reload();
        }
    });
});

let submitButton = document.querySelector(".submit-btn");
let submitMessage = document.getElementById("submit-message");

submitButton.addEventListener("click", function() {
    let allFilled = true;

    inputs.forEach(function(input) {
        if (input.value === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        submitMessage.style.display = "block";
        submitMessage.style.color = "green";
        submitMessage.textContent = "Phone number submitted, thank you for using our system :)";
    } else {
        submitMessage.style.display = "block";
        submitMessage.style.color = "red";
        submitMessage.textContent = "Please complete all numbers first.";
    }
});
