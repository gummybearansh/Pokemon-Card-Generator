# Retro Pokémon Card Generator

## Project Overview 👾

This is a web application that allows users to generate and display retro-themed Pokémon cards. The user can enter a Pokémon's name in a text box, and the application fetches data from the **PokeAPI** to dynamically create a draggable card for that Pokémon.

The project was built from scratch using HTML, CSS, and vanilla JavaScript, with a focus on understanding core web development principles and API integration.

## Features ✨

* **Dynamic Card Generation:** Users can generate a new card for any valid Pokémon name.
* **API Integration:** The application uses the `fetch` API to retrieve real-time Pokémon data.
* **Draggable Cards:** Cards can be picked up and repositioned anywhere on the page using a mouse.
* **Retro UI/UX:** The design features a minimalistic, retro-inspired color scheme and typography.
* **Visual Cues:** Animations and text hints guide the user, indicating that cards are draggable.
* **Custom Component:** The card "component" is built dynamically in JavaScript using DOM manipulation.

## Technical Concepts Learned 🧠

### 1. API Fundamentals
* **REST APIs:** I learned how to interact with a REST API by sending `GET` requests to specific endpoints to retrieve data.
* **JSON Data:** I gained experience handling and parsing JSON data, which is the standard format for API responses, to extract specific information like Pokémon names, types, and sprites.

### 2. Asynchronous JavaScript (`fetch`)
* I learned how to use the modern `fetch` API to make network requests. This involved understanding **Promises**, and how to chain `.then()` blocks to handle a successful response and `.catch()` to manage errors.
* The process of converting a raw response object into a usable JavaScript object using `response.json()` was a key learning point.

### 3. DOM Manipulation
* I built a custom "card" component entirely in JavaScript. This involved creating elements with `document.createElement()`, adding classes, setting attributes, and appending them to the document using methods like `appendChild()`.
* This approach showed me how to build dynamic user interfaces based on fetched data, rather than static HTML.

### 4. Drag-and-Drop Functionality
* I implemented full drag-and-drop functionality using core JavaScript events: `mousedown`, `mousemove`, and `mouseup`.
* This required a deep dive into event handling, managing state with global variables (`isDragging`), and manipulating CSS properties like `position: absolute`, `top`, and `left` to control an element's placement on the page.

### 5. UI/UX Principles
* I used CSS animations (`@keyframes`) and event listeners (`animationend`) to provide visual feedback to the user, making the interface more intuitive and engaging.
* I also learned how to use `e.stopPropagation()` to prevent unwanted event bubbling, ensuring that the drag functionality only works on specific parts of the card and not on the GIF.

## Installation and Setup 🚀

To run this project locally, simply clone the repository and open the `index.html` file in your browser.

```bash
git clone <your-repository-url>
cd retro-pokemon-card-generator
open index.html
