import { useState } from "react"

export const AddExpenses = () => {
    const [addTittle, setAddTittle] = useState('');
    const [addPrice, setAddPrice] = useState('');
    const [addDate, setAddDate] = useState('')
    const [allData, setAllData] = useState([])


    const handleTitle = (e) => setAddTittle(e.target.value)
    const handlePrice = (e) => setAddPrice(e.target.value)
    const handleDate = (e) => setAddDate(new Date(e.target.value))

    function handleGatherAllData(event) {
        event.preventDefault()
        console.log('clicou!')
        setAllData(...allData, { title: addTittle, price: addPrice })
    }

    console.log(allData, addDate)

    return (
        <div>
            <form onSubmit={handleGatherAllData} action="">
                <div>
                    <label htmlFor="">Title</label>
                    <input onChange={handleTitle} value={addTittle} type="text" />
                </div>
                <div>
                    <label htmlFor="">Amount</label>
                    <input onChange={handlePrice} value={addPrice} type="number" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Date</label>
                    <input onChange={handleDate} value={addDate} type="date" name="" id="" />
                </div>
                <input type="submit" value="Add Expense" />
            </form>
        </div>
    )
} 