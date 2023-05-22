/* ADD ARROW FUNCTIONALITY TO <details>
---------------------------------------------------------- */
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


/* ADD EXTERNAL STYLESHEETS
---------------------------------------------------------- */
function addStylesheet(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}
addStylesheet("https://cdn.jsdelivr.net/gh/scottdraper8/ti-styles/general/dillinger-md.css")
