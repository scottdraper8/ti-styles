// Set arrow depending on element state
const setArrow = (el, event) => {
    if (event.target.hasAttribute("open")) {
        el.innerText = el.innerText.replace(/►/, '▼')
    } else {
        el.innerText = el.innerText.replace(/▼/, '►')
    }
}

// Event listener for element toggle
const detailsEls = document.querySelectorAll('details')
const summaryEls = document.querySelectorAll('details summary')
for (let i = 0; i < detailsEls.length; i++) {
    summaryEls[i].innerText = '►' + summaryEls[i].innerText
    detailsEls[i].addEventListener('toggle', (e) => setArrow(summaryEls[i], e))
}
