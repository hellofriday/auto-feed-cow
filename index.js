// ==UserScript==
// @name         Auto Click Canvas
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically click on canvas element every 10ms if it exists
// @author       Your Name
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('start')
    // Function to simulate a click event
    function simulateClick(element) {
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
    }

    // Poll for the canvas element and click it if it exists
    setInterval(() => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            simulateClick(canvas);
        }
        console.log('clicked')
    }, 100);
})();
