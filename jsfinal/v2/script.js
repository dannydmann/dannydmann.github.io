let buttons = document.querySelectorAll(".roll-btn");

let intervals = [];
let colorIntervals = [];
let holdTimes = Array(buttons.length).fill(0);
let pressStartTimes = Array(buttons.length).fill(0);
const maxHoldTime = 4000; 
const rollSpeed = 80;

buttons.forEach(function(button, index) {
    button.addEventListener("mousedown", function() {
        if (holdTimes[index] >= maxHoldTime) {
            alert("The buttons got too hot! Refresh & try again!");
            location.reload();
            return;
        }

        pressStartTimes[index] = Date.now();

        let currentNum = parseInt(button.textContent) || 0;

        intervals[index] = setInterval(function() {
            button.textContent = currentNum;
            currentNum++;
            if (currentNum > 9) {
                currentNum = 0;
            }
        }, rollSpeed);

        colorIntervals[index] = setInterval(function() {
            let elapsed = (Date.now() - pressStartTimes[index]) + holdTimes[index];
            let percent = Math.min(elapsed / maxHoldTime, 1);

            let gb = Math.floor(255 * (1 - percent));
            button.style.backgroundColor = `rgb(255, ${gb}, ${gb})`;

            if (elapsed >= maxHoldTime) {
                clearInterval(intervals[index]);
                clearInterval(colorIntervals[index]);
                alert("The buttons got too hot! Refresh & try again!");
                location.reload();
            }
        }, 50);
    });

    button.addEventListener("mouseup", function() {
        if (holdTimes[index] >= maxHoldTime) {
            return;
        }

        let heldTime = Date.now() - pressStartTimes[index];
        holdTimes[index] += heldTime;

        clearInterval(intervals[index]);
        clearInterval(colorIntervals[index]);
    });
});

let submitButton = document.querySelector(".submit-btn");
let submitMsg = document.getElementById("submit-message");

submitButton.addEventListener("click", function() {
    let nums = [];
    buttons.forEach(function(btn) {
        nums.push(btn.textContent.trim());
    });

    let phone = `(${nums.slice(0, 3).join('')}) ${nums.slice(3, 6).join('')}-${nums.slice(6).join('')}`;

    if (confirm("This your number?: " + phone + ". Submit it?")) {
        submitMsg.style.display = "block";
        submitMsg.style.color = "green";
        submitMsg.textContent = "Thank you :)!";
    }
});
