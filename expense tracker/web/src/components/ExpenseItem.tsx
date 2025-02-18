import { useState } from "react";
import { updateExpense, deleteExpense } from "../service/api";

const ExpenseItem = ({ expense, onUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  const handleUpdate = async () => {
    try {
      await updateExpense(expense.id, editedExpense);
      setIsEditing(false);
      onUpdated();
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteExpense(expense.id);
      onUpdated();
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <li className="p-3 bg-white shadow rounded-lg">
      {isEditing ? (
        <div className="flex flex-wrap gap-2 md:flex-nowrap">
          <input
            value={editedExpense.title}
            onChange={(e) => setEditedExpense({ ...editedExpense, title: e.target.value })}
            className="border p-2 rounded w-full md:w-1/3"
            placeholder="Title"
          />
          <input
            value={editedExpense.amount}
            onChange={(e) => setEditedExpense({ ...editedExpense, amount: Number(e.target.value) })}
            className="border p-2 rounded w-full md:w-1/4"
            type="number"
            placeholder="Amount"
          />
          <input
            value={editedExpense.category}
            onChange={(e) => setEditedExpense({ ...editedExpense, category: e.target.value })}
            className="border p-2 rounded w-full md:w-1/3"
            placeholder="Category"
          />
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <span className="text-gray-700">{expense.title} - ${expense.amount} ({expense.category})</span>
        </div>
      )}

      <div className="flex gap-2 mt-2">
        {isEditing ? (
          <button onClick={handleUpdate} className="bg-green-500 text-white px-3 py-1 rounded w-full md:w-auto flex ml-5">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-3 py-1 rounded w-full md:w-auto flex ml-auto">
            Edit
          </button>
        )}
        <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded w-full md:w-auto">
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
