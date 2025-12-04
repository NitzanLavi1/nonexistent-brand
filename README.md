# NONEXISTENT Brand Landing Page

This is a React + Vite + Tailwind CSS project for the "NONEXISTENT" brand landing page.

## Setup & Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  Open the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

-   `src/App.jsx`: Main component containing the landing page logic.
-   `src/index.css`: Global styles and Tailwind directives.
-   `tailwind.config.js`: Tailwind configuration for custom fonts and colors.

## Customization

### Swapping Model Images

To use your own model images (e.g., the ones you uploaded):

1.  Place your image files in the `public` folder or inside `src/assets`.
2.  Open `src/App.jsx`.
3.  Locate the comments marked `TODO` in the "Model Photography Section".
4.  Replace the placeholder URLs with your local paths.

Example:
```jsx
// Before
<img src="https://placehold.co/600x800..." ... />

// After (if images are in public folder)
<img src="/my-model-image.jpg" ... />
```

### Video Source

The video is currently streaming from the provided URL. If you have a local video file, place it in the project and import it or reference it similarly.
