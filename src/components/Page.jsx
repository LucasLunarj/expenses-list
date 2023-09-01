//Hooks
import { useState } from 'react'
//Style
import styles from './Page.module.css'
//Components
import { AddExpenses } from "./AddExpenses"
import { ExpensesList } from './ExpensesList'


export const Page = () => {
    const [expensesData, setExpensesData] = useState([])

    const expensesListData = expensesData.map((item, index) => <ExpensesList key={index} price={item.price} />)

    const onGetData = (data) => {
        return setExpensesData(data)
    }

    return (
        <div className={styles.container} >
            <AddExpenses getExpensesData={onGetData} />
            <div>
                {expensesListData}
            </div>
        </div>
    )
}