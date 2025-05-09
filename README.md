# E-Commerce Application

This is a simple e-commerce application built with Angular. It showcases a product listing, product details, and basic cart functionality. The application is designed to be modular, scalable, and easy to maintain.

## Features

- **Product Listing**: Displays a grid of products with details like name, price, category, and rating.
- **Product Details**: Provides detailed information about a selected product.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Project Structure

The project follows a modular structure:

- `src/app/components`: Contains reusable components like `header`, `footer`, `product-card`, `product-list`, and `product-detail`.
- `src/app/models`: Contains TypeScript interfaces for data models (e.g., `Product`).
- `src/app/services`: Contains services for handling business logic (e.g., `ProductService`).
- `src/app/app.routes.ts`: Defines the application's routing configuration.
- `src/app/app.component.ts`: The root component that integrates the header, footer, and main content.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [Angular CLI](https://angular.io/cli) (v15 or later)

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   ```bash
   http://localhost:4200
   ```