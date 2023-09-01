import styles from './ExpensesFilter.module.css'
export const ExpensesFilter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content} >
                <div>
                    <p>Filter by year</p>
                    <select name="" id="">
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
            </div>
        </div>
    )
}