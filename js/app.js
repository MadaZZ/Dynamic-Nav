/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function getListOfSections() {
    return document.getElementsByTagName('section');
}

function getListOfSectionHeaders() {
    return document.querySelectorAll('.landing__container h2');
}

function onDOMContenLoad() {
    setTimeout(createNavigationBar(), 0);
}

function onScroll() {
    clearTimeout(timer);
    showMenuBar();
    var timer = setTimeout(hideMenuBar(), 4000);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function showMenuBar() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('hidden');
}

function hideMenuBar() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('hidden');
}

// build the nav
function createNavigationBar() {
    let listOfSections = getListOfSections();
    let listOfSectionHeaders = getListOfSectionHeaders();

    let nav = document.createDocumentFragment();
    for (let i = 0; i < listOfSections.length; i++) {
        let navButton = document.createElement('button');
        navButton.setAttribute("class", "menu__link");
        navButton.textContent = listOfSectionHeaders[i].textContent;
        nav.appendChild(navButton);
    }
    var navlist = document.querySelector("#navbar__list");
    navlist.appendChild(nav);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

//Adding onLoadEvent
document.addEventListener('DOMContentLoaded', onDOMContenLoad());
document.body.addEventListener('scroll', onScroll());

// Build menu 

// Scroll to section on link click

// Set sections as active


