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

var menuTimer;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Method to Show navbar
function showMenuBar() {
    const navbar = document.querySelector('nav');
    navbar.classList.remove('hidden');
}

//Method to hide navbar
function hideMenuBar() {
    const navbar = document.querySelector('nav');
    navbar.classList.add('hidden');
}

// Method to get list of sections
function getListOfSections() {
    return document.getElementsByTagName('section');
}

// Method to get list of header
function getListOfSectionHeaders() {
    return document.querySelectorAll('.landing__container h2');
}

// function calls on content loaded event
function onDOMContenLoad() {
    setTimeout(createNavigationBar(), 0);
    setTimeout(addActions(), 0);
}

// function calls on scroll
function onScroll(event) {
    navbarToggleHandler();
    toggleGotoTopButton();
    // activateSection();
}

// Toggle visibility of go to top button
function toggleGotoTopButton() {
    let button = document.getElementById('float');
    if (window.pageYOffset > 400) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
}

function addActions() {
    let button = document.getElementById('float');
    button.onclick = this.goToTop;
}

function goToTop() {
    window.scrollTo(0, 0);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function navbarToggleHandler() {
    clearTimeout(menuTimer);
    showMenuBar();
    menuTimer = setTimeout(this.hideMenuBar, 6000);

}

// build the nav
function createNavigationBar() {
    let listOfSections = getListOfSections();
    let listOfSectionHeaders = getListOfSectionHeaders();

    let nav = document.createDocumentFragment();
    for (let i = 0; i < listOfSections.length; i++) {
        let navButton = document.createElement('li');
        navButton.setAttribute("class", "menu__link");
        navButton.toTag = listOfSections[i].id;
        navButton.textContent = listOfSectionHeaders[i].textContent;
        navButton.onclick = scrollToSection;
        nav.appendChild(navButton);
    }
    var navlist = document.querySelector("#navbar__list");
    navlist.appendChild(nav);
}


// Add class 'active' to section when near top of viewport
function activateSection() {
    const listOfSections = getListOfSections();
    const windowOffset = window.pageYOffset;
    for (let i = 0; i < listOfSections.length; i++) {
        if(listOfSections[i].offsetTop <= window.pageYOffset - 20){
            setSectionActive('#'+listOfSections[i].id);
            return;
        }
    }
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

//Adding onLoadEvent
document.addEventListener('DOMContentLoaded', this.onDOMContenLoad);

//Adding on scroll event
document.body.onscroll = this.onScroll;


// Scroll to section on link click
function scrollToSection(event) {
    if (event.toElement.toTag) {
        let obj = '#' + event.toElement.toTag;
        document.querySelector(obj).scrollIntoView({
            behavior: 'smooth'
        });
        setSectionActive(obj);
    }
}

// Set sections as active
function setSectionActive(obj) {
    const activeSection = document.querySelector(obj);
    let listOfSections = getListOfSections();
    for (let i = 0; i < listOfSections.length; i++) {
        const element = listOfSections[i];
        element.classList.remove('your-active-class');
    }
    activeSection.classList.add('your-active-class');
}
