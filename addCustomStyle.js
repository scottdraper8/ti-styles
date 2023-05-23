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
let addStylesheet = (url) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}
addStylesheet("https://cdn.jsdelivr.net/gh/scottdraper8/ti-styles/site-main.css")
addStylesheet("https://cdn.jsdelivr.net/gh/scottdraper8/ti-styles/dillinger.css")


/* EDIT SCROLLBARS & BACKGROUND IMAGE
---------------------------------------------------------- */
// Define page vars
let scrollbarColor = 'white'
let path = window.location.pathname.split('/')[3]

// Change the background and scrollbar color for each course
switch (path) {
    case 'daily-coding-challenges-200340-22-may-2023-16-august-2023':
        scrollbarColor = 'var(--link-color)'
        document.body.style.backgroundImage = 'url("https://i.imgur.com/RjgrVb4.jpg")'
        break
    case 'html-and-css-200340-22-may-2023-16-august-2023':
        scrollbarColor = '#71b5bd'
        document.body.style.backgroundImage = 'url("https://i.imgur.com/88zrin1.jpg")'
        break
    case 'front-end-fundamentals-200340-22-may-2023-16-august-2023':
        document.body.style.backgroundImage = 'url("https://i.imgur.com/tMd0wGQ.jpg")'
        break
    case 'full-stack-development-200340-22-may-2023-16-august-2023':
        scrollbarColor = 'var(--link-color)'
        document.body.style.backgroundImage = 'url("https://i.imgur.com/AgHy3aa.jpg")'
        break
    case 'python-and-django-200340-22-may-2023-16-august-2023':
        scrollbarColor = '#67778E'
        document.body.style.backgroundImage = 'url("https://i.imgur.com/39ceaFj.jpg")'
        break
    case 'react-fundamentals-200340-22-may-2023-16-august-2023':
        document.body.style.backgroundImage = 'url("https://i.imgur.com/ceYKe1O.jpg")'
        break
}

// Set the scrollbar color
document.querySelector(':root').setProperty('--scroll-thumb-color', scrollbarColor)
