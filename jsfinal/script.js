let buttons = document.querySelectorAll(".roll-btn");
let boxes = document.querySelectorAll(".digit-box");

let intervals = [];
let triesLeft = Array(buttons.length).fill(5);

buttons.forEach(function(button, index) {
    let box = boxes[index]; // connect each button to matching box below

    button.addEventListener("mousedown", function() {
        if (triesLeft[index] <= 0) {
            alert("You ran out of tries! Reloading the page...");
            location.reload();
            return;
        }

        button.style.backgroundColor = "red";

        let currentNum = parseInt(box.textContent) || 0;
        intervals[index] = setInterval(function() {
            box.textContent = currentNum;
            currentNum++;

            if (currentNum > 9) {
                currentNum = 0;
            }
        }, 80);
    });

    button.addEventListener("mouseup", function() {
        if (triesLeft[index] <= 0) {
            return;
        }

        clearInterval(intervals[index]);

        button.style.backgroundColor = "green";

        triesLeft[index] -= 1;
        button.textContent = triesLeft[index]; // update button with remaining tries
    });
});

let submitButton = document.querySelector(".submit-btn");
let submitMessage = document.getElementById("submit-message");

submitButton.addEventListener("click", function() {
    let allFilled = true;

    boxes.forEach(function(box) {
        if (box.textContent.trim() === "") {
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
