//Style
import styles from './Page.module.css'
//Components
import { AddExpenses } from "./AddExpenses"
import { ExpensesList } from './ExpensesList'

export const Page = () => {
    return (
        <div className={styles.container} >
            <AddExpenses />
            <ExpensesList />
        </div>
    )
}