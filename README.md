# Eppies Restaurant - Static Website

This project is a multi-page static website for **Eppies Restaurant**. It was built using traditional HTML, CSS, and Vanilla JavaScript, ensuring it requires no complex build tools or servers to run locally.

## Project Structure

The files have been structured in a standard static website format:

- `index.html` - The Home Page with the impressive hero video.
- `menu.html` - Displays the Seasonal and Signature Menus.
- `reservations.html` - The form to secure a reservation.
- `about.html` - The story of Eppies legacy.
- `blog.html` - Articles and Epicurean notes.
- `find-us.html` - Location and hours.
- `/css/style.css` - The compiled CSS styles driving the beautiful interface.
- `/js/main.js` - Contains the subtle micro-animations that trigger as you scroll.
- `/images/` - Folder for any static images (note: most images are fetched from external URLs directly in the HTML).

## How to Open Locally

To view the website on your computer:
1. Open the extracted project folder on your computer.
2. Double-click on `index.html`. 
3. It will open in your default web browser. You do not need to start any servers!

## How to Edit Text and Images

Since this is a standard HTML/CSS project, you can make changes using any basic text editor (like Notepad, VS Code, or Sublime Text).

**To edit text:**
1. Right-click any of the `.html` files (e.g., `about.html`) and select "Open With -> Notepad" (or your preferred editor).
2. Locate the text you want to change (e.g., "A Taste of History").
3. Modify the text, save the file, and refresh your browser to see the changes.

**To edit images:**
1. If you want to replace an image that is hosted online (e.g., `src="https://images.unsplash.com/..."`), simply replace the URL inside the `src="..."` attribute with your new image's URL.
2. If you want to use local images, move your image file into the `/images` folder.
3. Replace the `src` attribute in your HTML file to point to the local image (e.g., `src="images/my-new-burger.jpg"`). Keep in mind the `alt` tag should also be updated to describe the new image.

---
*Created by Antigravity*
