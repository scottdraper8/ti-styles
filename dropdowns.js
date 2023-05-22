// Set arrow depending on element state
const setArrow = (el) => {
    // Add an arrow if none exist
    if (!el.innerText.includes('►') || !el.innerText.includes('▼')) {
        el.innerText = '►' + el.innerText

        // Switch the arrow if exists
        if (el.innerText.includes('►')) {
            el.innerText = '▼' + el.innerText
        } else if (el.innerText.includes('▼')) {
            el.innerText = '►' + el.innerText
        }
    }
}

// Event listener for element toggle
const detailsEls = document.querySelectorAll('details')
const summaryEls = document.querySelectorAll('details summary')
for (let i = 0; i < detailsEls.length; i++) {
    setArrow(summaryEls[i])
    detailsEls[i].addEventListener('toggle', () => setArrow(summaryEls[i]))
}
