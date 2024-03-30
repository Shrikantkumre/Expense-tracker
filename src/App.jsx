// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [amount, setamount] = useState('')
//   const [income, setincome] = useState('')
//   const [desc, setdesc] = useState('')

//   function addIncome() {

//   }
//   function addExpanse() {



//   }



//   return (
//     <>
//       <div className='maincontainer'>
//         <input type="Number" placeholder='Amount' />
//         <input type="text" placeholder='Description' />
//         <button className='Income'>Income</button>
//         <button className='Expanse'>Expanse</button>
//       </div>
//       <div className='diplayinput'>


//       </div>

//       <div className='Amountinfo '>
//         <table>
//           <tr>
//             <td>Amount</td>
//             <td>Description</td>
//             <td>Type</td>
//             <td>Total</td>
//           </tr>
//           <tr>
//             <td>Column 1</td>
//             <td>Column 2</td>
//             <td>Column 3</td>
//             <td>Column 4</td>
//           </tr>
//         </table>
//       </div>
//     </>
//   )
// }

// export default App



// import React, { useState } from 'react';

// function App() {
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [balance, setBalance] = useState(0);


//   const [transactions, setTransactions] = useState([]);

//   function addExpense() {
//     if (amount !== '') {
//       const newBalance = balance - parseInt(amount);
//       setBalance(newBalance);
//       const newTransaction = { type: 'Expense', amount: parseInt(amount), description };
//       setTransactions([...transactions, newTransaction]);
//       setAmount('');
//       setDescription('');
//     }
//   }

//   function addIncome() {
//     if (amount !== '') {
//       const newBalance = balance + parseInt(amount);
//       setBalance(newBalance);
//       const newTransaction = { type: 'Income', amount: parseInt(amount), description };
//       setTransactions([...transactions, newTransaction]);
//       setAmount('');
//       setDescription('');
//     }
//   }

//   function addList() {
//     return (
//       <ul>
//         {transactions.map((transaction, index) => (
//           <li key={index}>
//             {transaction.type}: {transaction.amount} = {transaction.description}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <div>
//       <input
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         placeholder='Type your amount'
//       />
//       <input
//         type="text"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder='Type your description'
//       />
//       <button onClick={addExpense}>Expense</button>
//       <button onClick={addIncome}>Income</button>
//       <p>Total: {balance}</p>
//       <h2>History of transaction</h2>
//       {addList()}
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);

  function addIncome() {
    if (amount !== '') {
      const newTotal = total + parseInt(amount);
      setTotal(newTotal);
      const newTransaction = { amount: parseInt(amount), description: desc, type: 'Income' };
      setTransactions([...transactions, newTransaction]);
      setAmount('');
      setDesc('');
    }
  }

  function addExpense() {
    if (amount !== '') {
      const newTotal = total - parseInt(amount);
      setTotal(newTotal);
      const newTransaction = { amount: parseInt(amount), description: desc, type: 'Expense' };
      setTransactions([...transactions, newTransaction]);
      setAmount('');
      setDesc('');
    }
  }

  return (
    <>
      <div className='maincontainer'>
        <input type="number" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder='Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button className='Income' onClick={addIncome}>Income</button>
        <button className='Expense' onClick={addExpense}>Expense</button>
      </div>
      <div className='diplayinput'>

        <p>Total: {total}</p>
      </div>

      <div className='Amountinfo'>
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Type</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.amount}</td>
                <td>{transaction.description}</td>
                <td>{transaction.type}</td>
                <td>{transaction.type === 'Income' ? '+' : '-'} {transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
}

export default App;
