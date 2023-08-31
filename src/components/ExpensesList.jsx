import styles from './ExpensesList.module.css'
export const ExpensesList = () => {
    return (<div>
        <div className={styles.container}>
            <div className={styles.content}>
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
                    <p>$Price</p>
                </div>
            </div>
        </div>
    </div>
    )
}