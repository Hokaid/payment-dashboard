import { Transaction } from "./types";

const mockTransactions: Transaction[] = [
  { id: 1, date: "2023-01-01", description: "Payment 1", amount: 100 },
  { id: 2, date: "2023-01-02", description: "Payment 2", amount: 150 },
  { id: 3, date: "2023-01-03", description: "Payment 3", amount: 250 },
  { id: 4, date: "2023-01-04", description: "Payment 4", amount: 340 },
  { id: 5, date: "2023-01-05", description: "Payment 5", amount: 430 },
  { id: 6, date: "2023-01-06", description: "Payment 6", amount: 650 },
  { id: 7, date: "2023-01-07", description: "Payment 7", amount: 100 },
  { id: 8, date: "2023-01-08", description: "Payment 8", amount: 190 },
  { id: 9, date: "2023-01-09", description: "Payment 9", amount: 80 },
  { id: 10, date: "2023-01-10", description: "Payment 10", amount: 10 },
];

export const fetchTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 1000);
  });
};
