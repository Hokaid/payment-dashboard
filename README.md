# Payment Transaction Dashboard

## Overview

This project is a prototype of a payment transaction dashboard built using React.js and TypeScript. The dashboard allows users to view a list of payment transactions, filter transactions by date range, implement pagination, sorting, and display a summary section with total transactions and amount.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/payment-dashboard.git
   cd payment-dashboard
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## Project Structure

- **src/**
  - **api.ts:** Mock API for fetching payment transaction data.
  - **types.ts:** TypeScript types/interfaces used in the project.
  - **components/**
    - **TransactionList.tsx:** Main component displaying payment transactions with filtering, sorting, pagination, and summary.

## Features

- Display a list of payment transactions.
- Filter transactions by date range.
- Implement pagination to show a limited number of transactions per page.
- Add sorting functionality by date or amount.
- Create a summary section displaying total transactions and total transaction amount within the selected date range.

## Dependencies

- React.js
- TypeScript

## Additional Notes

- The project uses inline styles for simplicity. You may choose to integrate a CSS framework or use external stylesheets for more advanced styling.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.
