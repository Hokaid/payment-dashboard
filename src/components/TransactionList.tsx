import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../api";
import { Transaction } from "../types";

const TransactionList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [transactionsPerPage] = useState<number>(5); // Adjust the number of transactions per page as needed
  const [sortType, setSortType] = useState<"date" | "amount" | "">("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions();
        const filteredTransactions = data.filter((transaction) => {
          if (startDate && endDate) {
            return transaction.date >= startDate && transaction.date <= endDate;
          }
          return true;
        });

        // Sort transactions based on the selected sort type
        const sortedTransactions = sortTransactions(
          filteredTransactions,
          sortType
        );

        setTransactions(sortedTransactions);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setError("Error fetching transactions. Please try again."); // Set error message
      }
    };

    fetchData();
  }, [startDate, endDate, sortType]);

  // Function to handle pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  // Function to handle sorting
  const handleSort = (type: "date" | "amount") => {
    setSortType(type);
  };

  // Function to sort transactions
  const sortTransactions = (
    data: Transaction[],
    type: "date" | "amount" | ""
  ): Transaction[] => {
    if (type === "date") {
      return [...data].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (type === "amount") {
      return [...data].sort((a, b) => a.amount - b.amount);
    }
    return data;
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Payment Transactions</h2>
      {error && (
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
      )}
      <div style={{ textAlign: "center", margin: "10px" }}>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <label>Sort by:</label>
        <button onClick={() => handleSort("date")}>Date</button>
        <button onClick={() => handleSort("amount")}>Amount</button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {currentTransactions.map((transaction) => (
          <li
            key={transaction.id}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ddd",
            }}
          >
            <strong>ID:</strong> {transaction.id} <br />
            <strong>Date:</strong> {transaction.date} <br />
            <strong>Description:</strong> {transaction.description} <br />
            <strong>Amount:</strong> ${transaction.amount}
          </li>
        ))}
      </ul>
      <div style={{ textAlign: "center", margin: "10px" }}>
        {/* Pagination */}
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastTransaction >= transactions.length}
        >
          Next
        </button>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        {/* Summary Section */}
        <strong>Total Transactions:</strong> {transactions.length} <br />
        <strong>Total Amount:</strong> $
        {transactions.reduce(
          (total, transaction) => total + transaction.amount,
          0
        )}
      </div>
    </div>
  );
};

export default TransactionList;
