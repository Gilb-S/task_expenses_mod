import { useState } from "react";
import { addExpense } from "../service/api";

const ExpenseForm = ({ onExpenseAdded }: { onExpenseAdded: () => void }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !category) return;
    
    await addExpense({ title, amount: Number(amount), category });
    setTitle("");
    setAmount("");
    setCategory("");
    onExpenseAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-3">
      <input className="border p-2 rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input className="border p-2 rounded" type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input className="border p-2 rounded" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
