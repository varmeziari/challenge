# E-commerce Frontend Challenge

Welcome to the E-commerce Frontend Challenge! This project is designed to test your frontend development skills, including your ability to create a responsive and visually appealing UI using **Next.js 14** and **Tailwind CSS**. You'll build a simple e-commerce interface with three pages, using provided mock data for products and sellers.

---

## Project Overview

This project contains three main pages:

1. **Home Page**
2. **Products Page**
3. **User Cart Page**


Your task is to build each of these pages based on the requirements outlined below.

---

## Requirements

1. **Framework & Styling**:
   - Use **Next.js 14** for the frontend framework.
   - Use **Tailwind CSS** for all styling.
   
2. **Navigation**:
   - Create a navigation bar that allows users to switch between the Home, Products, and Sellers pages. 
   - The navigation should be accessible from all pages.

3. **Page Details**:
   - **Home Page**: Display a welcome section and links to the Products and Sellers pages.
   - **Products Page**: 
      - Display a list of products using the `ProductList.json` data provided.
      - Each product should show at least the name, category, subcategory, price, and a placeholder image.
     - **Add to Cart Button**:
         - Each product card should include an **"Add to Cart" button** with a hover effect, visually enhancing the button when users hover over it.
      - **Filtering**:
         - Implement a simple filter that allows users to filter products based on a given state or category. (For example, a dropdown to filter by category or availability.)
      
      - **Responsive Layout**:
         - For Desktop, display products in a **4-column grid**.
         - For smaller screens, adjust to fit as many product cards per row as possible without breaking the layout.
  
   - **User Cart Page**:
      - When users click on the Cart button in the header, they should be taken to a **User Cart Page**.
      - The User Cart Page should display a list of items that the user has added to the cart.
      - Each item in the cart should display relevant details, such as product name, price, quantity, and a thumbnail image.
      - Users should have the ability to remove items from the cart on this page.

4. **Cart Button with Product Count**:
   - Add a **Cart button in the header** with an SVG cart icon that displays the number of items added to the cart.
   - Use any state management solution of your choice to handle the cart state, making sure the product count updates dynamically.


5. **Responsiveness**:
   - All pages should be fully responsive, ensuring that they look good on both desktop and mobile screens.

6. **Data**:
   - Use the mock data files `ProductList.json` and `Sellers.json` provided.
   - No need for backend data fetching—load data directly from these JSON files.


## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
3. Run the development server:
   ```bash
   npm install
4. Open http://localhost:3000 to view the app in the browser.


## Version Control Instructions

- **Fork the Repository**: Please fork the project repository to your GitHub account, create a branch (e.g., `feature/your-feature-name`), and commit your changes to your forked repository.
