const countUps = document.querySelectorAll('#feedback .countup')
window.onload = () => {
    countUps && countUps.forEach((countup) => {
        let finalNumber = Number(countup.innerHTML)
        animateNumber_feedback(finalNumber, 1500, 0, countup)
    })
}





function animateNumber_feedback(
    finalNumber,
    duration = 1000,
    startNumber = 0,
    elementNumber
) {
    let currentNumber = startNumber;
    const interval = window.setInterval(updateNumber, 17);
    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval);
            window.addEventListener("scroll", processChange_static);
        } else {
            window.removeEventListener("scroll", processChange_static);
            let inc = Math.ceil(finalNumber / (duration / 17));
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber;
                clearInterval(interval);
            } else {
                currentNumber += inc;
            }
            elementNumber.innerHTML = currentNumber
        }
    }
}