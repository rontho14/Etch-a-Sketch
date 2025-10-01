# Etch-a-Sketch: A Browser-Based Grid Drawing App 🎨

This project is a browser-based implementation of an "Etch-a-Sketch" style drawing application. It utilizes **HTML**, **CSS** (specifically **Flexbox** for grid layout), and **JavaScript** to create an interactive grid where users can "draw" by hovering their mouse over the squares.

---

## ✨ Features

* **Dynamic Grid Generation:** A grid of square `<div>` elements is generated entirely using JavaScript, with a default size of 16x16.
* **Interactive Drawing Trail:** When the mouse hovers over a square, its color changes, leaving a pixelated trail behind, similar to a pen on paper.
* **Customizable Grid Size:** A button allows the user to input a new number of squares per side, dynamically recalculating the size of the new squares to fit the same container space. The input is limited to a maximum of **100**.
* **Progressive Darkening (Extra Credit):** Each time a square is hovered over, it darkens by **10%** of its current color, eventually becoming fully black after ten interactions.
* **Random RGB Colors (Extra Credit):** The initial color of a square is randomized with each interaction before the darkening effect is applied.

---

## 💻 Technologies Used

* **HTML5:** For the basic page structure and the main container/button.
* **CSS3 (Flexbox):** Crucial for laying out the grid and ensuring the squares are properly sized and positioned in rows and columns.
* **JavaScript (ES6):** Used for DOM manipulation, grid creation, event handling (hover and button click), and implementing the drawing logic.

---

## ⚙️ How to Run

1.  **Clone the Repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd [your-project-folder-name]
    ```
3.  **Open in Browser:**
    Open the `index.html` file directly in your web browser.

---

## 📐 Implementation Details

### 1. Grid Structure with Flexbox

The core challenge was creating a true grid (rows and columns) without using the **CSS Grid** module, as per project constraints.

* **Container Setup:** A single main `container` is styled with `display: flex;` and `flex-direction: column;`. This makes the container a flexible column of **rows**.
* **Row Creation:** In JavaScript, we first generate the specified number of **rows** (each represented by a `div` element).
* **Row Styling:** Each row is also styled with `display: flex;` and `flex: 1;` (or `flex-grow: 1;`) to ensure it takes up an equal height of the main container. This makes the row a flexible **row** of squares.
* **Square Creation:** Inside each row, the specified number of **squares** are generated.
* **Square Sizing:** Each square is given a `flex: 1;` property. Since the parent is a Flexbox row, this ensures all squares in that row are of equal width and collectively fill the entire row width. The height is inherently constrained by the row's height.

This nested Flexbox approach (`flex-direction: column` for the main container and `flex-direction: row` (the default) for the rows) effectively simulates a robust grid.

### 2. Custom Grid Resizing

The `newGrid()` button function:

1.  Uses the `prompt()` method to get the desired number of squares per side from the user.
2.  Validates the input, ensuring it's a number and doesn't exceed the limit of **100**.
3.  **Removes** the existing grid elements from the DOM.
4.  Calls the grid generation function with the new size. Since the total container width and height are fixed (e.g., `960px`), the new squares are automatically sized by Flexbox to fit perfectly within the same space.

### 3. Hover Effect and Progressive Darkening (Extra Credit)

The coloring and darkening logic is handled by an `mouseover` event listener attached to each square:

* **Random Color:** On the first hover, a random full-saturation RGB color is generated and applied to the square's `background-color`.
* **Darkening:** A custom `data-darkness` attribute is used to track how many times a square has been interacted with. Each interaction increments this value and applies a **CSS `filter: brightness()`** style. The `brightness` value starts at $1$ and decreases by $0.1$ for each hover (e.g., $0.9$, $0.8$, ..., $0.0$). This allows the color to progressively darken towards black.