import styles from './ExpensesList.module.css'
import { ExpensesFilter } from './ExpensesFilter'
export const ExpensesList = ({ price }) => {

    return (<div>
        <div className={styles.container}>
            <div className={styles.content}>
                <ExpensesFilter />
                <div>
                    <div>
                        <p>Month</p>
                        <p>Year</p>
                        <p>Day</p>
                    </div>
                    <div>
                        <p>Title</p>
                    </div>
                </div>
                <div>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    </div>
    )
}