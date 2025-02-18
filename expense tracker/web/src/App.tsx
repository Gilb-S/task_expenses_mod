import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-5'>
      <Navbar/>
      <div className="max-w-md mx-auto">
        <ExpenseForm onExpenseAdded={() => window.location.reload()}/>
        <ExpenseList/>
      </div>
    </div>
  )
}

export default App