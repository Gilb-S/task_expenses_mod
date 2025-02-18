import axios from 'axios'

const API_URL = "http://localhost:8800/expenses"

export const getExpense = async () => {
    const res = await axios.get(API_URL);
    return res.data;
}

export const addExpense = async(expense: {title: string , amount: number, category: string}) => {
    await axios.post(API_URL, expense);
};


export const updateExpense = async(id: number, updateExpense: {title: string, amount: number, category: string}) => {
    await axios.put(`${API_URL}/${id}`, updateExpense);
};


export const deleteExpense = async(id:number) => {
    await axios.delete(`${API_URL}/${id}`);
}