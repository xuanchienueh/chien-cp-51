const number_runs_page_introduction = document.querySelectorAll('.number_run_page_introduc .number > span')
function logo_company_page_introduct() {

    function debounce(func, timeout = 700) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    function animateNumber(
        finalNumber,
        duration = 2000,
        startNumber = 0,
        processChange,
        element
    ) {
        let currentNumber = startNumber;
        const interval = window.setInterval(updateNumber, 17);
        function updateNumber() {
            if (currentNumber >= finalNumber) {
                clearInterval(interval);
                window.addEventListener("scroll", processChange);
            } else {
                window.removeEventListener("scroll", processChange);
                let inc = Math.ceil(finalNumber / (duration / 17));
                if (currentNumber + inc > finalNumber) {
                    currentNumber = finalNumber;
                    clearInterval(interval);
                } else {
                    currentNumber += inc;
                }

                element.innerHTML = currentNumber
            }
        }
    }

    function run() {
        number_runs_page_introduction.forEach((number_run) => {
            let finalNumber = Number(number_run.innerHTML)
            let processChange = () => { }
            animateNumber(finalNumber, 1500, 0, processChange, number_run)
        })
    }
    let debounce_scroll = debounce(() => run())

    let indexScrollPrev = 0
    window.addEventListener('scroll', () => {
        if (window.scrollY > indexScrollPrev) {

            debounce_scroll()
        }
        indexScrollPrev = window.scrollY
    })
}

number_runs_page_introduction && logo_company_page_introduct()