/**
 * Professor's Note: JAVASCRIPT ANIMATION LOGIC TUTORIAL
 * * This file contains the JavaScript (JS) logic that controls page content
 * and demonstrates fundamental programming concepts like Arrays and If Statements.
 * * The HTML and CSS handle the visual animations (like the navbar hover),
 * but JS handles the behavior (what happens when a button is clicked).
 */

// We use 'DOMContentLoaded' to ensure the entire HTML structure is loaded
// before we try to select any elements with JavaScript. This prevents errors.
/** 
 * Event is a browser event that fires when the initial HTML document has been 
 * completely loaded and parsed, meaning the Document Object Model (DOM) 
 * is fully constructed. 
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SETUP & ELEMENT SELECTION ---

    const titleElement = document.getElementById('main-title');
    const subtitleElement = document.getElementById('subtitle-text');
    const statusMessageElement = document.getElementById('status-message');
    const changeTextBtn = document.getElementById('change-text-btn');
    const statusBtn = document.getElementById('status-btn');
    
    // An array to hold the navigation link elements.
    const navLinks = [
        document.getElementById('nav-link-0'),
        document.getElementById('nav-link-1'),
        document.getElementById('nav-link-2')
    ];


    // --- 2. CORE CONCEPT: ARRAYS ---

    const navTitlesArray = [
        "Home Page",
        "Coding Demos",
        "Student Info",
        "Final Project",
        "Home Pg",
        "Code Demos",
        "Info",
        "First Project"
    ];

    const statusMessagesArray = [
        "Status: Ready to Code!",
        "Status: Animation Loop Started.",
        "Status: Arrays are fun!",
        "Status: Conditional logic applied."
    ];

    // Tracks which status message is being shown
    let currentMessageIndex = 0;

    // NEW: Tracks where we are in navTitlesArray for the Change Text button
    // Each click will advance this offset so the nav text cycles.
    let currentNavOffset = 0;


    // --- 3. EVENT LISTENERS (Handling Clicks) ---

    changeTextBtn.addEventListener('click', updateNavText);
    statusBtn.addEventListener('click', checkStatus);


    // --- 4. FUNCTION DEFINITIONS ---

    /**
     * ARRAY USAGE & CYCLING LOGIC
     * This function now cycles through 'navTitlesArray' every time the
     * Change Text button is clicked. It uses currentNavOffset so that each
     * click shows a new combination of titles.
     */
    function updateNavText() {
        // Loop through each nav link and assign a title based on currentNavOffset
        for (let i = 0; i < navLinks.length; i++) {
            const arrayIndex = (currentNavOffset + i) % navTitlesArray.length;
            navLinks[i].textContent = navTitlesArray[arrayIndex];
        }

        // Advance the offset so the next click uses the next set of titles
        currentNavOffset = (currentNavOffset + 1) % navTitlesArray.length;

        // Update subtitle to show feedback to the user
        subtitleElement.textContent = "Navigation links updated! Click again to cycle through more options.";
        subtitleElement.style.color = '#34D399'; // Green accent
    }

    /**
     * CONDITIONAL (IF/ELSE) STATEMENTS
     * This function changes the status message and applies different visual
     * styles based on the value of currentMessageIndex.
     */
    function checkStatus() {
        // Update the index for the next message and wrap using modulo
        currentMessageIndex = (currentMessageIndex + 1) % statusMessagesArray.length;

        // Get the current message from the array.
        const currentMessage = statusMessagesArray[currentMessageIndex];

        // Display the new message.
        statusMessageElement.textContent = currentMessage;

        // Conditional styling based on currentMessageIndex
        if (currentMessageIndex === 0) {
            statusMessageElement.style.color = '#FFC107';
            statusMessageElement.style.textShadow = 'none';

        } else if (currentMessageIndex === 1) {
            statusMessageElement.style.color = '#818CF8';
            statusMessageElement.style.textShadow = '0 0 10px #818CF8';

        } else {
            statusMessageElement.style.color = '#F472B6';
            statusMessageElement.style.textShadow = 'none';
        }
    }
});
