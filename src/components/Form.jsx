import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'

const Form = () => {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState(false)

    const addExpense = e => {
        e.preventDefault()

        if(quantity < 1 || isNaN(quantity) || name.trim() === ''){
            setError(true)
            return
        }

        const budget = {
            name,
            quantity,
            id: shortid.generate()
        }

        setError(false)
    }

    return (
        <form
            onSubmit ={addExpense}
        >
            <h2>Add your expenses</h2>

            {error ? <Error message="Fields are required or incorrec budget"/> : null}

            <div className="campo">
                <label>Expense</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="e.g Food"
                    value= {name}
                    onChange= {e => setName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Queantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="e.g 5000"
                    value= {quantity}
                    onChange= {e => setQuantity(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add budget"
            />

        </form>
    )
}

export default Form