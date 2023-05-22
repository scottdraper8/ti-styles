// Set arrow depending on element state
let setArrow = (el, event) => {
    if (event.target.hasAttribute("open")) {
        el.innerText = el.innerText.replace(/►/, '▼')
    } else {
        el.innerText = el.innerText.replace(/▼/, '►')
    }
}

// Event listener for element toggle
let detailsEls = document.querySelectorAll('details')
let summaryEls = document.querySelectorAll('details summary')
for (let i = 0; i < detailsEls.length; i++) {
    summaryEls[i].innerText = '►' + summaryEls[i].innerText
    detailsEls[i].addEventListener('toggle', (e) => setArrow(summaryEls[i], e))
}