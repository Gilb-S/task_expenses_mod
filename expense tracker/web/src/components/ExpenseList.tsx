import { useEffect, useState } from "react";
import { getExpense } from "../service/api";
import ExpenseItem from "./ExpenseItem";
import ExpenseChart from './ExpenseChart'

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const data = await getExpense();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
    <ExpenseChart expenses={expenses} />
    <div className="bg-white p-4 shadow-md rounded-lg mt-5">
      <h2 className="text-lg font-semibold mb-3">Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {expenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} onUpdated={fetchExpenses} />
          ))}
        </ul>
      )}
    </div>
  </div>
  );
};

export default ExpenseList;
