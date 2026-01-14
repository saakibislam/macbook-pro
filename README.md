# Project Overview
This application provides an interactive interface for users to configure their ideal MacBook Pro. As users toggle between different hardware specifications and shipping preferences, the total cost is calculated and displayed dynamically. The project demonstrates core DOM manipulation concepts, event handling, and conditional logic in JavaScript.

# ✨ Key Features
#### 1. Specification Customization
Users can tailor the laptop to their needs by selecting:

**Memory (RAM)**: Options to upgrade from the unified 8GB memory to 16GB.

**Storage (SSD)**: Choices ranging from the standard 256GB SSD to 512GB or 1TB storage options.

**Cost Calculation**: Each upgrade adds a specific amount to the base price immediately.

#### 2. Delivery Preferences
**Free Delivery**: Standard shipping option (Free cost).

**Prime Delivery**: Expedited shipping option (Adds $20 to the shipping cost).

#### 3. Dynamic Pricing Engine
The application maintains a "Best Price" (Base Price) and calculates "Extra Memory Cost," "Extra Storage Cost," and "Delivery Charge."

**Total Price**: The sum of all selected options is updated instantly in the UI.

#### 4. Discount Coupon System
Includes a promotional code input field.

**Coupon Code**: >stevekaku

**Functionality**: Applying this code validates the input and applies a 20% discount to the grand total, displaying the new discounted price at the bottom.

# 🛠 Technologies Used
**HTML5**: Semantic structure for the product card and configuration options.

**CSS3**: Styling for buttons, layout, and responsive design.

**JavaScript (ES6)**:

Event Listeners for button clicks.

Functions to handle state changes (updating costs).

Logic for calculating the total price and validating the coupon code.
