const billAmt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector(".check-btn");
const message = document.querySelector(".error-message");
const noOfNotes = document.querySelector(".no-of-notes");
const changeTable = document.querySelector(".change-table");
const cashGivenCal = document.querySelector(".cash-given-calc");
const nextBtn = document.querySelector(".next-btn");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
cashGivenCal.style.display = "none";
changeTable.style.display = "none";
nextBtn.addEventListener("click", function validateBillAmt() {
    console.log(typeof billAmt.value)
    if (Number(billAmt.value) <= 0) {
        showMessage('invalid bill amount');
        cashGivenCal.style.display = "none";
    } else {
        cashGivenCal.style.display = 'block';
    }
});

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
checkBtn.addEventListener("click", function checkCashGiven() {
    if (Number(cashGiven.value) >= Number(billAmt.value)) {
        changeTable.style.display = "block"
        const amtToBeReturned = cashGiven.value - billAmt.value;
        calculateChange(amtToBeReturned);
    } else {
        showMessage("Cash given is insufficient");
        changeTable.style.display = "none";
    }
});

function calculateChange(amtToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const notes = Math.trunc(
            amtToBeReturned / availableNotes[i]
        );
        console.log(amtToBeReturned);
        console.log(availableNotes[i])
        console.log(notes);
        noOfNotes[i].innerText = notes;
        amtToBeReturned %= availableNotes[i];
    }
}