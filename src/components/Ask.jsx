import React, {Fragment, useState} from 'react'
import Error from './Error'

const Ask = ({setBudget, setRest, showAsk}) => {

    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState(false)

    const defineBudget= e => {
        setQuantity(parseInt(e.target.value, 10))
    }

    const addBudget = e => {
        e.preventDefault()

        if(quantity < 1 || isNaN(quantity)){
            setError(true)
            return
        }

        setBudget(quantity)
        setError(quantity)
        showAsk(false)
        setError(false)
    }


    return (

        <Fragment>

            <h2>Insert your Budget</h2>

            {error ? <Error  message="The Budget is incorrect" /> : null}

            <form
            onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Insert your Budget here"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define Budget"
                />
            </form>

        </Fragment>

    )

}

export default Ask