let buttons = document.querySelectorAll(".roll-btn");

let intervals = [];
let colorIntervals = [];
let holdTimes = Array(buttons.length).fill(0);
let pressStartTimes = Array(buttons.length).fill(0);
const maxHoldTime = 4000;
const rollSpeed = 80;

function updateFireOverlay() {
    let totalPercent = 0;
    buttons.forEach(function(button, index) {
        totalPercent += Math.min(holdTimes[index] / maxHoldTime, 1);
    });

    let avgPercent = totalPercent / buttons.length;

    const fire = document.getElementById("fire-overlay");
    if (fire) {
        fire.style.opacity = avgPercent.toFixed(2);
    }
}

buttons.forEach(function(button, index) {
    button.addEventListener("mousedown", function() {
        if (holdTimes[index] >= maxHoldTime) {
            alert("The buttons got waaay too hot! Refresh to start over.");
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

            updateFireOverlay();

            if (elapsed >= maxHoldTime) {
                clearInterval(intervals[index]);
                clearInterval(colorIntervals[index]);
                alert("The buttons got waaay too hot! Refresh to start over.");
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

        updateFireOverlay();
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

    if (confirm("You entered the number: " + phone + ". This look right?")) {
        submitMsg.style.display = "block";
        submitMsg.style.color = "green";
        submitMsg.textContent = "Thank you for submitting (and not breaking our system) :)";
        setTimeout(() => location.reload(), 2000);
    }
});
