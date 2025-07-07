import { useState } from "react";
import Form from "./components/Form"
import List from "./components/List"



const expenseList = [
  {
  id: 1,
  name: "Bills",
  amount: 1000,
  date: "2025-06-27"  
  },
  {
  id: 2,
  name: "allowance",
  amount: 500,
  date: "2025-06-27"  
  }
]

function App(){
  const [expenses, setExpenses] = useState(expenseList);

  function removeExpense(id){
    setExpenses((prevExpenses) => prevExpenses.filter((expense => expense.id !== id)))
  }

  function addExpense(expense){
    setExpenses((prevExpenses) => [
      {
        ...expense,
        id:Date.now(),
      },
      ...prevExpenses,
    ]);
  }

  return(
    <div className="container">
      <h1>Expense Tracker</h1>
      <Form onAddExpense={addExpense}/>
      <List expenses={expenses} onDelete={removeExpense}/>
    </div>
  );
}

export default App;
