
import { useEffect, useState } from 'react'
import './App.css'

type Transaction = {
    id: number
    description: string
    amount: number
    type: string
}

function App() {
    const [searchText, setSearchText] = useState('')
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('https://localhost:7069/api/Transactions')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load transactions')
                }
                return response.json()
            })
            .then((data: Transaction[]) => {
                setTransactions(data)
            })
            .catch(() => {
                setError('Unable to load transactions from the API.')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    const totalIncome = transactions
        .filter((transaction) => transaction.type === 'Credit')
        .reduce((total, transaction) => total + transaction.amount, 0)

    const totalExpenses = transactions
        .filter((transaction) => transaction.type === 'Debit')
        .reduce((total, transaction) => total + transaction.amount, 0)

    const filteredTransactions = transactions.filter(
        (transaction) =>
            transaction.description
                .toLowerCase()
                .includes(searchText.toLowerCase())
    )


    return (
        <div className="dashboard">
            <h1>Welcome to Banking Dashboard</h1>
            <p>Your banking information in one place.</p>

            <div className="balance-card">
                <h3>Total Account Balance</h3>
                <h2>$12,500.00</h2>
                <p>Checking Account</p>
            </div>

            <div className="summary-cards">
                <div className="income-card">
                    <h3>Total Income</h3>
                    <h2>${totalIncome.toFixed(2)}</h2>
                    <p>This month</p>
                </div>

                <div className="expense-card">
                    <h3>Total Expenses</h3>
                    <h2>${totalExpenses.toFixed(2)}</h2>
                    <p>This month</p>
                </div>
            </div>

            <div className="transactions-section">
                <h2>Recent Transactions</h2>

                <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                {loading && <p>Loading transactions...</p>}

                {error && <p role="alert">{error}</p>}

                {!loading && !error && (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredTransactions.map((transaction) => (
                                    <tr key={transaction.id}>
                                        <td>{transaction.description}</td>
                                        <td>
                                            <span
                                                className={
                                                    transaction.type === 'Credit'
                                                        ? 'credit-label'
                                                        : 'debit-label'
                                                }
                                            >
                                                {transaction.type}
                                            </span>
                                        </td>
                                        <td
                                            className={
                                                transaction.type === 'Credit'
                                                    ? 'credit-amount'
                                                    : 'debit-amount'
                                            }
                                        >
                                            {transaction.type === 'Credit' ? '+' : '-'}
                                            ${transaction.amount.toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {filteredTransactions.length === 0 && (
                            <p>No transactions found.</p>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default App
