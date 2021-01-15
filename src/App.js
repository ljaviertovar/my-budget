import React, { useState } from 'react'
import Ask from './components/Ask'
import Form from './components/Form'

function App() {

  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [showAsk, setShowAsk] = useState(true)

  return (

    <div className="Container">

      <h1>Weekly expense</h1>

      <div className="contenido-principal contenido">

        {showAsk
          ?
          (
            <Ask
              setBudget={setBudget}
              setRest={setRest}
              showAsk={setShowAsk}
            />
          )
          :
          (
            <div className="row">
              <div className="one-half column">
                <Form />
              </div>
              <div className="one-half column"></div>
            </div>
          )
        }

      </div>

    </div>

  );
}

export default App;
