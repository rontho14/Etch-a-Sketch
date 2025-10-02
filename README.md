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



### 3. Hover Effect and Progressive Darkening (Extra Credit)

The coloring and darkening logic is handled by an `mouseover` event listener attached to each square:

* **Random Color:** On the first hover, a random full-saturation RGB color is generated and applied to the square's `background-color`.
* **Darkening:** A custom `data-darkness` attribute is used to track how many times a square has been interacted with. Each interaction increments this value and applies a **CSS `filter: brightness()`** style. The `brightness` value starts at $1$ and decreases by $0.1$ for each hover (e.g., $0.9$, $0.8$, ..., $0.0$). This allows the color to progressively darken towards black.
